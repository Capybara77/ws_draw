var socket;

var loc = window.location, new_uri;
if (loc.protocol === "https:") {
    new_uri = "wss:";
} else {
    new_uri = "ws:";
}
new_uri += "/" + loc.host;
new_uri += loc.pathname + "/ws";

if (typeof (WebSocket) !== 'undefined') {
    socket = new WebSocket(new_uri);
} else {
    socket = new MozWebSocket(new_uri);
}

socket.onmessage = function (msg) {
    var data = msg.data.split(':');
    ctx.beginPath();
    ctx.moveTo(data[0], data[1]);
    ctx.lineTo(data[2], data[3]);
    ctx.stroke();

};

socket.onclose = function (event) {
    console.log('lost connection');
    if (typeof (WebSocket) !== 'undefined') {
        socket = new WebSocket(new_uri);
    } else {
        socket = new MozWebSocket(new_uri);
    }
};

const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");
let prevX = null;
let prevY = null;
ctx.lineWidth = 5;
let draw = false;
let clrs = document.querySelectorAll(".clr");
clrs = Array.from(clrs);
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr;
    });
});

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Saving drawing as image
let saveBtn = document.querySelector(".save");
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png");
    let a = document.createElement("a");
    a.href = data;
    // what ever name you specify here
    // the image will be saved as that name
    a.download = "sketch.png";
    a.click();
});

window.addEventListener("mousedown", (e) => draw = true);
window.addEventListener("mouseup", (e) => draw = false);
window.addEventListener("mousemove", (e) => {
    if (prevX == null || prevY == null || !draw) {
        prevX = e.clientX;
        prevY = e.clientY;
        return;
    }
    let currentX = e.clientX;
    let currentY = e.clientY;
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currentX, currentY);
    ctx.stroke();

    socket.send(prevX + ':' + prevY + ':' + currentX + ':' + currentY + ':');

    prevX = currentX;
    prevY = currentY;

});