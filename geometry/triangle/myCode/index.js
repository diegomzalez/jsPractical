const triangle = [
        tSide1 = 6,
        tSide2 = 6,
        tBase = 4,
        tPerimeter = tSide1 + tSide2,
        tHeight = 5.5,
        tArea = (tBase * tHeight) / 2
];
console.group("Triangles");
console.log(`Triangle sides measure: side 1: ${tSide1} cm, side 2: ${tSide2} cm, base: ${tBase} cm.`);
console.log(`Triangle height measure: ${tHeight} cm`);
console.log(`Triangle Perimeter measure: ${tPerimeter} cm`);
console.log(`Triangle Area measure: ${tArea} cm^2`);
console.groupEnd();