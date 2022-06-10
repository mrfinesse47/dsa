// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

//4 : 1+1+2+3+5+8

function fib(num) {
  if (num < 3) {
    return 1;
  }

  const res = fib(num - 1) + fib(num - 2);
  return res;
}

console.log(fib(4));
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
