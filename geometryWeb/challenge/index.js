/**
 * The function calculates isoceles triangle height, receiving sides and base triangle
 * @param {float} sides 
 * @param {float} base 
 * @returns isoceles triangle height
 */
function tHeight(sides, base){
        const height = (sides**2 - ((base / 2 )**2 ));
        Math.sqrt(height);
        return height;
}
function calculateHeight() {
        const sides = document.getElementById("tSideInput");
        const sValue = sides.value;

        const base = document.getElementById("tBaseInput");
        const sBase = base.value;

        const height = tHeight(sValue, sBase);
        alert(height);
}