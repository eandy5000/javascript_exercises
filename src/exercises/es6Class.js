console.log("hi");
//parent
class Animal {
  constructor(name, health) {
    this._name = name;
    this._health = health;
  }
  eat() {
    console.log(`${this._name} is eating...`);
  }
  get health() {
    return this._health;
  }
  set health(amt) {
    this._health += amt;
  }
}

class Dog extends Animal {
  constructor(name, health) {
    super(name, health);
  }
  bark() {
    console.log("aarrff aarrff aarrff");
  }
  eat() {
    super.eat();
    console.log("kibble");
  }
}

const a = new Animal("fish", 12);
const d = new Dog("Bjarney", 9);
console.log("Animal ", a);
console.log("Animal ", a.health);
a.health = 30;
console.log("Animal ", a);

console.log("dog ", d);
d.eat();
