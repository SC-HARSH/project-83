var Eventname = "nothing";
var lastcoordx, lastcoordy;
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 3;


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    Eventname = "mousedown";
}

document.getElementById("mycanvas").addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    Eventname = "mouseleave";
}

document.getElementById("mycanvas").addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    Eventname = "mouseup";
}

document.getElementById("mycanvas").addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    currentcoordx = e.clientX - canvas.offsetLeft;
    currentcoordy = e.clientY - canvas.offsetTop;
    console.log(lastcoordy);
    if (Eventname == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(lastcoordx, lastcoordy, radius, 0 , 2*Math.PI);
        ctx.stroke();
    };
    lastcoordx = currentcoordx;
    lastcoordy = currentcoordy;
}
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
screenwidth = screen.width;
screenheight = screen.height;
newscreenwidth = screenwidth - 70;
newscreenheight = screenheight - 300;

if (screenwidth < 992) {
    canvas.width = newscreenwidth;
    canvas.height = newscreenheight;
    document.body.style.overflow = "hidden";
};

document.getElementById("mycanvas").addEventListener("touchstart", my_touchstart);
function my_touchstart(e) {
    lastx = e.touches[0].clientX - canvas.offsetLeft;
    lasty = e.touches[0].clientY - canvas.offsetTop;
    console.log("my_touchstart");
};
document.getElementById("mycanvas").addEventListener("touchmove", my_touchmove);
function my_touchmove(e) {
    curx = e.touches[0].clientX - canvas.offsetLeft;
    cury = e.touches[0].clientY - canvas.offsetTop;
    console.log(lastx)
    console.log(lasty);
    ctx.beginPath();
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(lastx, lasty, radius, 0 , 2*Math.PI);
    ctx.stroke();
    lastx = curx;
    lasty = cury;
}
