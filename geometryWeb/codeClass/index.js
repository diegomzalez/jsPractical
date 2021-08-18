// Square Code
console.group("Cuadrados");

function sPerimeter(lado) {
  return lado * 4;
}

function sArea(lado) {
  return lado * lado;
}

console.groupEnd();

// HTML interaction
function calculateSquarePerimeter() {
        const input = document.getElementById("squareInput");
        const value = input.value;
        
        const perimeter = sPerimeter(value);
        alert(perimeter);
}
function calculateSquareArea() {
        const input = document.getElementById("squareInput");
        const value = input.value;

        const area = sArea(value);
        alert(area);
}
