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
        const sideA = document.getElementById("tSideAInput");
        const sAValue = sideA.value;

        const sideB = document.getElementById("tSideBInput");
        const sBValue = sideB.value;

        const base = document.getElementById("tBaseInput");
        const sBase = base.value;

        if (sAValue === sBValue) {
                const height = tHeight(sAValue, sBase);
                alert(height);
        } else {
                alert("¡Los lados a y b no son iguales!");
        }
}