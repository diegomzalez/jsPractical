const circle = [
        cRadio = 4,
        cDiamater = cRadio * 2,
        cCircumference = cDiamater * Math.PI,
        cArea = (cRadio**2) * Math.PI
];
console.group("Circle");
console.log(`Circle radio measure: ${cRadio} cm`);
console.log(`Circle diamater measure: ${cDiamater} cm`); 
console.log (`Circle circumference measure: ${cCircumference}`);
console.log(`Circle area measure: ${cArea} cm^2`);
console.groupEnd();