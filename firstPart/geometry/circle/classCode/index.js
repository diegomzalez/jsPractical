console.group("Circles");
// Radio
const cRadio = 4;
console.log(`Circle radio measure: ${cRadio} cm`);

// Diameter
const cDiamater = cRadio * 2;
console.log(`Circle diamater measure: ${cDiamater} cm`); 

// PI
const PI = Math.PI;
console.log(`PI: ${PI}`);

// Circumference
const cCircumference = cDiamater * PI;
console.log (`Circle circumference measure: ${cCircumference}`);
// Area
const cArea = (cRadio * cRadio) * PI;
console.log(`Circle area measure: ${cArea} cm^2`)
console.groupEnd();