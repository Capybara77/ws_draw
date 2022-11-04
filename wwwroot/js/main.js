﻿// trailer
const trailer = document.querySelector("#me");

const canvas = document.getElementById("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");
let prevX = null;
let prevY = null;


const customLineWidth = document.getElementById("lineValue");
ctx.lineWidth = customLineWidth.value;

const myId = makeid(20);

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

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
    try {
        var data = msg.data.split(':');

        if (data[0] === 'move') {
            var d = ctx.lineWidth;
            var c = ctx.strokeStyle;

            canvas.getContext("2d");
            ctx.beginPath();
            ctx.moveTo(data[1], data[2]);
            ctx.lineTo(data[3], data[4]);
            ctx.lineWidth = data[5];
            ctx.strokeStyle = data[6];
            ctx.stroke();

            ctx.strokeStyle = c;
            ctx.lineWidth = d;
        }

        if (data[0] === 'color') {
            changeColor(data[1]);
        }

        if (data[0] === 'clear') {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        if (data[0] === 'cur') {
            const userId = data[1];
            let t;

            t = document.getElementById(userId);

            if (t === null) {
                t = document.createElement('div');
                t.id = userId;
                t.className = "trailer";
                document.body.appendChild(t);
                return;
            }

            const keyFrames = {
                transform: `translate(${data[2]}px, ${data[3]}px)`
            };

            t.animate(keyFrames, {
                fill: "forwards"
            });
        }

        if (data[0] === 'disconnect') {
            let list = document.getElementsByClassName("trailer");

            if (list.length === 0) return;

            for (var i = 0; i < list.length; i++) {
                if (list[i].id !== 'me') {
                    document.body.removeChild(list[i]);
                    i--;
                }
            }

            // const newList = [...list].filter(item => item.id !== "me");
            // newList.forEach(item => {document.removeChild(item)});
        }


    } catch (e) {
        console.log(e);
    }


};

function changeColor(color) {
    ctx.strokeStyle = color;
    trailer.style.backgroundColor = color;

    const list = document.querySelectorAll('.trailer');

    for (let t of list) {
        t.style.backgroundColor = color;
    }

}

socket.onclose = function (event) {
    console.log('lost connection');

    if (typeof (WebSocket) !== 'undefined') {
        socket = new WebSocket(new_uri);
    } else {
        socket = new MozWebSocket(new_uri);
    }
};



customLineWidth.addEventListener("change", (e) => {
    if (customLineWidth.value < 1 || customLineWidth.value > 20) {
        alert("че ебанулся");
        ctx.lineWidth = 10;
    }
    ctx.lineWidth = customLineWidth.value;
});


let draw = false;
let clrs = document.querySelectorAll(".clr");
clrs = Array.from(clrs);
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        changeColor(clr.dataset.clr);

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



window.addEventListener("mousedown", (e) => {
    if (e.button !== 0) return;
    draw = true;
});

window.addEventListener("mouseup", (e) => {
    draw = false;
});

// window.addEventListener("blur",
//     (e) => {

//     });

window.addEventListener("mousemove", (e) => {

    if (e.button !== 0) return;

    const trailerX = e.clientX - trailer.offsetWidth / 2;
    const trailerY = e.clientY - trailer.offsetHeight / 2;

    const keyFrames = {
        transform: `translate(${trailerX}px, ${trailerY}px)`
    };

    trailer.animate(keyFrames, {
        fill: "forwards"
    });

    socket.send('cur:' + myId + ':' + trailerX + ':' + trailerY + ':');


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

    socket.send('move:' +
        prevX +
        ':' +
        prevY +
        ':' +
        currentX +
        ':' +
        currentY +
        ':' +
        ctx.lineWidth +
        ':' +
        ctx.strokeStyle +
        ':');

    prevX = currentX;
    prevY = currentY;

});

