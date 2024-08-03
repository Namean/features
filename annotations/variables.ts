const apples: number = 5; // number is the type annotation
let speed: string = 'fast';
let hasName: boolean = true;


let nothingMuch: null = null;
let nothing: undefined = undefined;


// built in object

let now: Date = new Date();


// Array
//
// Do not confuese creating Arrays and 
// Creating an Array type annotation

let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];



// Classes
//
// Classes create a type
class Car { }

let car: Car = new Car();


// Object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};


// TODO: 

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}

const logNumber2: (j: number) => void = (j: number): void => {
  console.log(j);
}



logNumber(1);
logNumber2(2);


// When to use annotations: 0:43 / 7:47
// 1. Function that returs the `any`` type

const json = '{"x": 10, "y": 20 }';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};


// 2. When we declare a varaible on one line
// and initalize it later

let words = ['red', 'green', 'blue'];
let foundwords;


// 3. Variable whose type cannot be inferred correctly


let numbers = [-10, -1, 12];
let numbersAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numbersAboveZero = numbers[i];
  }
}





