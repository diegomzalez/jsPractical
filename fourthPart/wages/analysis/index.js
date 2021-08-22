// Helpers
function itsEven (number) {
        return number % 2 === 0;
}

function calculateArithmeticMean(list) {
        const listSum = list.reduce(
                function (accumulatedValue = 0, newElement) {
                        return accumulatedValue + newElement;

                }
        );

        const listMean = listSum / list.length;
        
        return listMean;
}
// Median calculator
// Median General
const wagesCol = colombia.map(
        function (person) {
                return person.salary;
        }
);

const sortedColSalaries = wagesCol.sort(
        function (salaryA, salaryB) {
                return salaryA -salaryB;
        }
);

function medianSalaries (salaries) {
        const half = parseInt(salaries.length / 2);

        if (itsEven(salaries.length)) {
                const  halfPerson = salaries[half - 1];
                const  halfPerson2 = salaries[half]; 
                const median = calculateArithmeticMean(halfPerson, halfPerson2);
                return median;
        } else {
                const  halfPerson = salaries[half];
                return halfPerson;
        }
}

const colMedianGeneral = medianSalaries(sortedColSalaries)
// Top 10% Median

const spliceStart = (sortedColSalaries.length * 90) / 100;
const spliceCount = sortedColSalaries.length - spliceStart;
const colTop10Salaries = sortedColSalaries.splice(
        spliceStart,
        spliceCount,
);
const colTop10Median = medianSalaries(colTop10Salaries);
console.log(
        colMedianGeneral,
        colTop10Median,
        );