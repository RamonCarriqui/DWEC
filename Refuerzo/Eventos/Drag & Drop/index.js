window.onload = () => {
    document.getElementById("demo").addEventListener("onmousemove", () => {
        var x = this.clientX;
        var y = this.clientY;
        var coor = "Coordinates: (" + x + "," + y + ")";
        document.getElementById("texto").innerHTML = coor;
    });
}

