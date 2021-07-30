
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

let myVar :any = 10; //can cause errors

console.log(myVar.name) //no error because type any
myVar(); //no error because type any
myVar.toUpperCase() //no error because type any


let myVar2 :unknown = 10; //can cause errors

// console.log(myVar2 + 10) //error because type unknown
// myVar2(); //error because type unknown
// myVar2.toUpperCase() //error

console.log(myVar2 as number + 10); // no error because as number
// myVar2(); //still an error because type unknown
(myVar2 as string).toUpperCase() //no error because as string

// OR you can define a function to add a type

let myVar3 :unknown = 10

function hasName(obj :any): obj is {name: string} {
    return !!obj &&
        typeof obj === 'object' &&
        "name" in obj
}

if (hasName(myVar3)) {
    console.log(myVar3.name) // no error
}

let a;
a = 10;
a = true; //no type error

let b = 20;

// b = true //type error inferred b is a number, because initial value

//b. will infer number methods


let multiType: number | boolean;
multiType = 20;
multiType = true