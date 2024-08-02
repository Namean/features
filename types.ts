
const today = new Date();
today.getMonth();


// - [How to use Hashmap in TypeScript ?](https://www.tutorialspoint.com/how-to-use-hashmap-in-typescript)
//let hashMap = new Map<K, V>();


const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"];




let hashmap = new Map<Number, string>();


hashmap.set(1, "Hello");

daysOfTheWeek.map((x, i) => hashmap.set(i, x));

//daysOfTheWeek.forEach((x, i) => console.log(hashmap.get(i)));


console.log(hashmap.get(new Date().getDay()))


const person = {
  age: 20
}


class Color {


  getColor() {
    return this.color;
  }
}


const red = new Color();






