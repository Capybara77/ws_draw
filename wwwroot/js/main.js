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

//command:data1:data2:

socket.onmessage = function (msg) {
    var data = msg.data.split(':');

    if (data[0] === 'move') {
        ctx.beginPath();
        ctx.moveTo(data[1], data[2]);
        ctx.lineTo(data[3], data[4]);
        ctx.stroke();
    }

    if (data[0] === 'color') {
        ctx.strokeStyle = data[1];
    }

    if (data[0] === 'clear') {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
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

        socket.send('color:' + clr.dataset.clr + ':');
    });
});

let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    socket.send('clear:');
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

// trailer
const trailer = document.getElementById("trailer");

window.addEventListener("mousedown", (e) => draw = true);
window.addEventListener("mouseup", (e) => draw = false);
window.addEventListener("mousemove", (e) => {


    const trailerX = e.clientX - trailer.offsetWidth / 2;
    const trailerY = e.clientY - trailer.offsetHeight / 2;

    console.log(e.clientX);
    console.log(trailerX);

    const keyFrames = {
        transform: `translate(${trailerX}px, ${trailerY}px)`
    };

    trailer.animate(keyFrames, {
        fill: "forwards"
    });


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

    socket.send('move:' + prevX + ':' + prevY + ':' + currentX + ':' + currentY + ':');

    prevX = currentX;
    prevY = currentY;





});


