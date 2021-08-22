const list = [
        1,
        2,
        3,
        1,
        2,
        3,
        4,
        2,
        2,
        2,
        1,
];
const listCount = {};

list.map(
        function (element) {
                if (listCount[element]) {
                        listCount[element] += 1;
                } else {
                        listCount[element] = 1;
                }
        }

);

const listArray =  Object.entries(listCount).sort(
        function (elementA, elementB) {
                return elementA[1] - elementB[1];
                
        }
)
const fad = listArray[listArray.length - 1]