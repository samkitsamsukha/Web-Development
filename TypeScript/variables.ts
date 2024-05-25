let greetings: string = "Hello TypeScript!";

let myNum = 4;

//myNum.toUpperCase(); cannot do this

greetings.toUpperCase();
console.log(greetings);

// number
let userId: number = 7373;
// let userId = 7373; TS can automatically detect the type when immediately initialised

// boolean
let isLoggedIn: boolean = false;

// any
let hero;
function getHero(){
    return "thor"
}
hero = getHero();

export {}