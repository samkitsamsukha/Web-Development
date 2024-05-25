function addTwo(num: number): number {
    return num+2;
}

console.log(addTwo(5));

function getUpper(str: string){
    return str.toUpperCase();
}

console.log(getUpper("samkit"));

function signUpUser(name: string, email: string, isPaid: boolean){}

signUpUser("sam", "sam@live.com", true);

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

loginUser("s", "s@s.com"); // although only 2/3 arguments are passed, the code won't show an error because isPaid: boolean = false has been declared in function definitia=on.

// function getVal(myVal: number): string{
//     if(myVal > 5){
//         return true;
//     }
//     return "200 OK"
// }

const getHello = (s: string): string => {
    return "Hello " + s;
}

const heroes = ["thor", "spiderman", "ironman"];

heroes.map((hero: string): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

export{}