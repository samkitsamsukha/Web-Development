let user: [string, number, boolean];
console.log(user) //undefined
user = ["Samkit", 7, true];
console.log(user) // [ 'Samkit', 7, true ]

type User = [number, string]
const newUser: User = [112, "Samkit"];
