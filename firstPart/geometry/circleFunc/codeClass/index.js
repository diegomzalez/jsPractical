function cDiameter(radio) {
        return radio * 2;
}
function cPerimeter(radio) {
        const diameter = cDiameter(radio);
        return diameter * Math.PI;
}
function cArea(radio) {
        return (radio**2) * Math.PI;
}