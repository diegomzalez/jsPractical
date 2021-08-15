// Replicate the behivor of the following for loops using while loops:
let i = 0;
while (i <= 5) {
        console.log(`I value is: ${i}`);
        i++;
}
i = 10;
while (i >= 2) {
        console.log(`I value is: ${i}`);
        i--;
}
// Write a JS code that asks users how much is 2 + 2.
i = true;
while (i == true) {
        let input = prompt("How much is 2 + 2?");
        if (input == 4) {
                console.log("Nice job!");
                i = false;
        } else {
                console.log("Incorrect!, please try again.");
                continue;
        }
}