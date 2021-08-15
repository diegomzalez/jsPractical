// 1) Calculate and display following variables from variables of the previous example:
/**
 * data
 * Asks user information.
 * @returns a array with user info. 
 */
function data() {
        return {
                name: prompt("What's your name?: "),
                lastname: prompt("What's your lastname?: "),
                money: prompt("How much money do you have?: "),
                debts: prompt("Do you have debts (type: amount)?: ")
        };

}
/**
 * displayData
 * Displays user info.
 * @param {A array with user info} info 
 */
function displayData (info) {
        fullName = info.name + " " + info.lastname;
        fullMoney = info.money - info.debts;
        console.log(`Your full name is: ${fullName}`);
        console.log(`You have: ${fullMoney}$`);
}
a = data();
displayData(a);






