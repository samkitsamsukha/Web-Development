"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
console.log(addTwo(5));
function getUpper(str) {
    return str.toUpperCase();
}
console.log(getUpper("samkit"));
function signUpUser(name, email, isPaid) { }
signUpUser("sam", "sam@live.com", true);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("s", "s@s.com"); // although only 2/3 arguments are passed, the code won't show an error because isPaid: boolean = false has been declared in function definitia=on.
// function getVal(myVal: number): string{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "Hello " + s;
};
var heroes = ["thor", "spiderman", "ironman"];
heroes.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
