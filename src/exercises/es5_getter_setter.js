console.log("getter and setter");

const p = new Person("Joe");
// throw error too short and wrong type throw error
// p.name = 42;
// p.name = "jo";
p.name = "Phil";

console.log(p.name);
p.sayHi();

const a = new Animal("cat");
console.log(a);
a.eat();

// defineProperties
function Person(name) {
  this.name = name;

  Object.defineProperties(this, {
    name: {
      get() {
        return name;
      },
      set(newName) {
        if (typeof newName === "string" && newName.length > 2) {
          name = newName;
        } else {
          throw new Error("invalid name");
        }
      }
    },
    sayHi: {
      value: function() {
        console.log(`${name} says hi!`);
      }
    }
  });
}

// defineProperty
function Animal(name) {
  Object.defineProperty(this, name, {
    value: name
  });
  Object.defineProperty(this, "eat", {
    value() {
      console.log(`the ${name} eats`);
    }
  });
}
