// Unions helps us when we are not sure about the data type which might be coming in

let score: number|string = 33;
// You can assign either a number or a string
console.log(score) // 33
score = 'Samkit'
console.log(score) // Samkit

type User = {
    name: string
    id: number
};
type Admin = {
    username: string
    id: number
};

let samkit: User|Admin = {
    name: 'Samkit',
    id: 7,
}
console.log(samkit)
samkit = {username: 'samkit', id: 7}
console.log(samkit)

function getDbId (id: number|string) {
    // Make API Calls
    if(typeof id === 'string'){
        id = id.toUpperCase();
    }
    else{
        id = id + 2;
    }
    console.log(`DB Id is ${id}`)
}

getDbId(3);
getDbId('sam');

const data: (number|string)[] = ["Samkit", 1, 2, 3];

let seatAllotment: "aisle"|"middle"|"window";
// seatAllotment = "crew"; NOT ALLOWED