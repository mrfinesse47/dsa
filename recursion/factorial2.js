function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(10));

function factorialIterative(num) {
  let res = 1;
  while (num > 0) {
    res *= num;
  }
  return res;
}

console.log(factorial(10));
