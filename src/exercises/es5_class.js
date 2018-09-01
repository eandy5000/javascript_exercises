console.log("hi");
//parent
function Animal(skin, health) {
  this.skin = skin;
  this.health = health;
}

Animal.prototype = {
  eat() {
    this.health++;
    console.log("eat ", this.health);
  },
  sleep() {
    this.health++;
    console.log("rest ", this.health);
  }
};

function Dog(name, health) {
  const coat = "fur";
  Animal.call(this, coat, health);
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log("arrff arrff arrff");
};

Dog.prototype.eat = function() {
  this.health++;
  console.log("chomp chomp ", this.health);
};

Dog.prototype.eatChomp = function() {
  console.log("chomping and eating");
  Animal.prototype.eat.call(this);
  this.eat();
};

const a = new Animal("fur", 12);
const d = new Dog("George", 8);

console.log(a);
a.eat();

console.log(d);
d.eat();
d.sleep();
d.bark();
d.eatChomp();
