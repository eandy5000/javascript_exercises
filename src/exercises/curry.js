console.log("curry");
const curAdd = curry(adder);
const plusTen = curAdd(10)(0);

console.log(plusTen(12));

function curry(fn) {
  const arity = fn.length;
  console.log("arity ", arity);
  return function f1(...args) {
    if (args.length >= arity) {
      return fn(...args);
    } else {
      //   console.log("not enough args");
      return function f2(...moreArgs) {
        const combinedArgs = args.concat(moreArgs);
        return f1(...combinedArgs);
      };
    }
  };
}

function adder(a, b, c) {
  return a + b + c;
}
