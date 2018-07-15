//7-15-18
// looks like tail call optimization isn't
// supported in browsers or node without flags
console.log("trampoline recursion");

// const trampCountdown = num => {
//   const base = 1;
//   console.log(num);
//   return num <= base ? base : trampCountdown.bind(null, num - 1);
// };

// trampCountdown(10);

// const trampFact = num => {
//   return num <= 0
//     ? 1
//     : () => {
//         return num * trampFact(num - 1);
//       };
// };

// console.log(trampFact(6));
