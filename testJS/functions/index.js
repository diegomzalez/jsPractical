// Convert the following code into a function.
/**
 * info
 * The function asks user info.
 * @returns a array with user info.
 */
function info() {
        return info = {
                name: prompt("What's your name?: "),
                lastname: prompt("What's your lastname?: "),
                nickname: prompt("What's your nickname?: ")
        };
}
/**
 * displayInfo
 * The function displays user info.
 * @param {user info} info 
 */
function displayInfo(info) {
        console.log("My name is " + info.name + " " + info.lastname + " but I would like to you call me " + info.nickname);


}
a = info();
displayInfo(a);
