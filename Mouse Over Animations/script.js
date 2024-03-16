const cursor = document.querySelector(".cursor");
var timeout;

// Follow cursor on mouse move
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px"
    cursor.style.display = "block";

    // Cursor effect on mouse stop
    function mouseStopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

// Cursor Effects on mouse out
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});