
// let message = "Welcome Back";

console.log(message);


let x = 10;
const y = 20

// let x = 30; //error re declared

// const title; //error, must be initialized with a value

const title = 'TITLE'

let isBeginner :boolean = false;

let total :number = 0

let username :string = 'Ethan'

let sentence :string = `My name is ${username} I am a beginner in Typescript`

console.log(sentence)

let n :null = null;
let u :undefined = undefined;

let isNew :boolean = null;

let myName :string = undefined

let array1 :number[] = [1,2,3]

let array2 :Array<string> = ['1','2','3']

let person1 :[string, number] = ['chris', 22] //must be in same order as the type array


enum Color {Red, Green, Blue};

let c :Color = Color.Green

console.log(c); // => 1


let randomValue :any = 10

randomValue = true;
randomValue = 'string';