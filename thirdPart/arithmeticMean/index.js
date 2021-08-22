function calculateArithmeticMean(list) {
        const listSum = list.reduce(
                function (accumulatedValue = 0, newElement) {
                        return accumulatedValue + newElement;

                }
        );

        const listMean = listSum / list.length;
        
        return listMean;
}