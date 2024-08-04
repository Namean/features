// src/annotations/classes.ts


/*

Now, we're going to break covering classes into kind of two spearate subjects


## First: Define a set of fields (values) and **methods** **(functions)** to represent a 'thing'


## Second: Define a set of **fields (values)** and methods (functions) to represent a 'thing'


- modifiers:
    - public (default): A given method or property can be called anywhere any time 
    - private: Method can only be called by same class definition

    - protected: This method can be called by other methods in this class, or by other methods in
                 child classes

- When ever we call the constructor of a child class we are required to call the constructor of the
  parent as well; i.e. by using the super() keyword
*/



// Super class or Parent class
class Vehicle {

  public honk(): void {
    console.log('beep');
  }
}

class Vehicle2 {
  color: string;

  constructor(color: string) {
    this.color = color;
  }


  // methods ...
}

class Vehicle3 {
  constructor(public color: string) { }

  protected honk(): void {
    console.log('beep');
  }
}


class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super();
  }
  private drive(): void {
    console.log('vroom!');
  }

  startDrivingProcess(): void {
    this.drive();
  }
}




const car = new Car(4, 'red');
car.startDrivingProcess();
car.honk();
