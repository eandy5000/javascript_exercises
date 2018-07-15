console.log("mixin");
//mixin for composition
const sleep = {
  sleep() {
    console.log("sleep");
  }
};

const walk = {
  walk() {
    console.log("walk");
  }
};

const swim = {
  swim() {
    console.log("swim");
  }
};

function Animal() {}

Animal.prototype.eat = function() {
  console.log("eating...");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("bark");
};
// dog mixin
Object.assign(Dog.prototype, sleep, walk);

function Fish() {}
Fish.prototype = Object.create(Animal.prototype);
Fish.prototype.constructor = Fish;

// fish mixin
Object.assign(Fish.prototype, sleep, swim);

const a = new Animal();
const d = new Dog();
const f = new Fish();

// console.log(a, a.eat());
//console.log(d.sleep());
console.log(f.sleep());
