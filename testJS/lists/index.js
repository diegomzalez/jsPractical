// 2) Create a function that can get any array as param and print its first element
pets = ["Dog", "Cat", "Bird", "Turtle"];
/**
 * firstElement
 * Prints first array element.
 * @param {array} array 
 */
function firstElement(array) {
        console.log("Array first element:")
        console.log(array[0]);

}
firstElement(pets);
// 3) Create a function that can get any array and print all its elements.
/**
 * allElements
 * Prints all array elements.
 * @param {array} array 
 */
function allElements(array) {
        console.log("Array all elements:")
        array.forEach(element => {
                console.log(element)
        });
} 
allElements(pets)
// 4) Create a function that can get any object and print all its elements
let car = {
        brand: "Tesla",
        year: "2020",
        model: "Model 3"
};
/**
 * allObjectElements
 * Prints all object elements.
 * @param {object} object 
 */
function allObjectElements(object) {
        console.log("Object all elements:")
        Object.values(car).forEach(element => {
                console.log(element);
        });
        
}
allObjectElements(car);
