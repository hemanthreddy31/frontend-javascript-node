// 08 - Prototypes and classes
console.log("08 - Prototypes and Classes");

function User(name) {
  this.name = name;
}

User.prototype.sayHi = function () {
  return `Hi, ${this.name}`;
};

const u1 = new User("Ana");
console.log(u1.sayHi());

class Car {
  constructor(brand) {
    this.brand = brand;
  }
  drive() {
    return `${this.brand} is driving`;
  }
}

const car = new Car("Tesla");
console.log(car.drive());