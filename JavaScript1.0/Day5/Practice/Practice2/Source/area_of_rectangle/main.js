function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}
function calculate(rectangle_w, rectangle_h) {
    if (isNaN(rectangle_h) || isNaN(rectangle_w)) {
        console.log("test");
        document.getElementById("ans").innerHTML = "Enter a digits only!!";
    } else {
        let Object = new Rectangle(rectangle_w, rectangle_h);
        let area = Object.width * Object.height;
        document.getElementById("ans").innerHTML = area;
    }
}
