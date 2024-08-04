// arrays.ts



const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];


// Help with inference when extracting value
const car = carMakers[0];
const myCar = carMakers.pop();


// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
})


// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];


// type alias
type Drink = [string, boolean, number];

// tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 20];


const carSpecs: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354
}
