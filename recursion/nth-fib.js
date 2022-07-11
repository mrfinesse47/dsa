function getNthFib(n) {
  // Write your code here.
  if (n === 1) {
    return 0;
  }
  if (n < 3) {
    return 1;
  }
  return getNthFib(n - 2) + getNthFib(n - 1);
}

console.log(getNthFib(5));
