//time script
setInterval(function updateTime() {
                document.querySelector("#timeElement").innerHTML = new Date().toLocaleString();
            }, 1000);
dragElement(document.getElementById("welcome"));
//dragging window script
function dragElement(element) {
    var initialx = 0;
    var initialy = 0;
    var currentx = 0;
    var currenty = 0;

    if (document.getElementById(element.id + "header")) {
        document.getElementById(element.id + "header").onmousedown = startDragging;
    } else {
        element.onmousedown = startDragging;
    }
}

function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
}

function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = e.clientX;
    currentY = e.clientY;
    element.style.top = (element.offsetTop + currentY) + "px";
    element.style.left = (element.offsetLeft + currentX) + "px";
}

function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
}