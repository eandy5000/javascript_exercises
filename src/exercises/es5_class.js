console.log("es5 class");

// parent constructor
function Shape(color) {
  this.color = color;
}

//parent method
Shape.prototype.draw = function() {
  console.log("draw");
};

// child method
function Circle(radius, color) {
  // parent constructor
  Shape.call(this, color);
  this.radius = radius;
}

// extends shape to circle
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.duplicate = function() {
  console.log("duplicate");
};

function Oval(color) {
  Shape.call(this, color);
}
Oval.prototype = Object.create(Shape.prototype);
Oval.prototype.constructor = Oval;

//override parent method
Oval.prototype.draw = function() {
  Shape.prototype.draw();
  console.log("oval");
};

const sh = new Shape("red");
const c = new Circle(1, "blue");
const o = new Oval("green");

console.log(sh, sh.draw());
console.log(c, c.draw());
console.log(o, o.draw());
