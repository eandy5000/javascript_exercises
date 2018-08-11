let price = 5;
let qty = 2;
let total = 0;
let target = null;
let storage = [];

target = () => {
  return (total = price * qty);
};

// code test area
console.log(total);
target();
record();
price = 10;
console.log(total);
record();
price = 20;
console.log(total);
record();
replay();
console.log(total);
console.log("store ", storage);

// code test area end
function record() {
  storage.push(target);
}

function replay() {
  storage.forEach(fn => {
    console.log("I ran", fn());
    return fn();
  });
}
