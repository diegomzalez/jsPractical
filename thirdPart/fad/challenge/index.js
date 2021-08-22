function fad (list) {
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
        return fad;                       
}