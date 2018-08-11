const tramp = (fn = (...args) => {
  let result = fn(...args);

  while (typeof result === "function") {
    result = result();
  }

  return result;
});

const sumB = (num, sum = 0) => {
  return num === 0 ? sum : () => sumB(num - 1, sum + num);
};

const trampSum = trampoline(sumB);

console.log("new syntax", trampSum(100000));
console.log("without trampoline sumB(3)()()()", sumB(3)()()());

const trampolineSum = trampoline(sumBelow);
console.log("old style ", trampolineSum(100000));

function sumBelow(num, sum = 0) {
  if (num === 0) {
    return sum;
  } else {
    return function() {
      return sumBelow(num - 1, sum + num);
    };
  }
}

function trampoline(fn) {
  return function(...args) {
    let result = fn(...args);

    while (typeof result === "function") {
      result = result();
    }

    return result;
  };
}
