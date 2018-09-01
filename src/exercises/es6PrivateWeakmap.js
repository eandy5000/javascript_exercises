// private weakmap method and property
const _health = new WeakMap();
const _doubleHealth = new WeakMap();

//parent
class Animal {
  constructor(name, health) {
    // private Weakmap methods need to be declared in the constructor
    _health.set(this, health);

    _doubleHealth.set(this, () => {
      _health.set(this, _health.get(this) * 2);
      console.log("doubling health");
    });

    this._name = name;
  }
  eat() {
    _doubleHealth.get(this)();
    console.log(`${this._name} is eating... health is ${_health.get(this)}`);
  }
  get health() {
    return _health.get(this);
  }
  set health(amt) {
    _health.set(this, _health.get(this) + amt);
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
console.log("double dog ", d.health);
