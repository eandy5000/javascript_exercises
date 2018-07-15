console.log("basic recursion");
// countDown(10);
console.log(factorial(6));

function factorial(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function countDown(num) {
  //base case
  if (num >= 1) {
    console.log(num);
    return countDown(num - 1);
  } else {
    return num;
  }
}
