const deviceQuery = window.matchMedia("(hover: hover)");

function canHover(e) {
    if (e.matches) {
        thing("fare");
        document.removeEventListener("touchstart", changeState);
        document.removeEventListener("touchend", changeState);

        document.addEventListener("mouseover", changeState);
        document.addEventListener("mouseout", changeState);
        document.addEventListener("mouseup", changeState);
        document.addEventListener("mousedown", changeState);

        document.addEventListener("contextmenu", changeState);

        document.addEventListener("keydown", changeState);
        document.addEventListener("keyup", changeState);
        document.addEventListener("click", changeState);
    } else {
        thing("dokunmatik");
        document.addEventListener("touchstart", changeState);
        document.addEventListener("touchend", changeState);

        document.removeEventListener("mouseover", changeState);
        document.removeEventListener("mouseout", changeState);
        document.removeEventListener("mouseup", changeState);
        document.removeEventListener("mousedown", changeState);

        document.removeEventListener("contextmenu", changeState);

        document.removeEventListener("keydown", changeState);
        document.removeEventListener("keyup", changeState);
    }
}

deviceQuery.addEventListener("change", canHover);
canHover(deviceQuery);