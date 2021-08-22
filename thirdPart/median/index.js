function calculateArithmeticMean(list) {
        const listSum = list.reduce(
                function (accumulatedValue = 0, newElement) {
                        return accumulatedValue + newElement;

                }
        );

        const listMean = listSum / list.length;
        
        return listMean;
}

const list = [
        100,
        200,
        500,
        400000000,
];
function itsEven(number) {
        if(number % 2 === 0 ) {
                return true;
        } else {
                return false;
        }
}

const listHalf = parseInt(list.length / 2);

let median;
if (itsEven(list.length)) {
        const element = list[listHalf - 1]
        const element2 = list[listHalf] 
        const element1And2Mean = calculateArithmeticMean([
                element, 
                element2,
        ]);

        median = element1And2Mean;
} else {
        median = list[listHalf];

}
