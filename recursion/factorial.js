function factorial(x) {
  if (x === 1) {
    console.log("base case:", x);
    return 1;
  }

  const res = factorial(x - 1);
  console.log("res:", res, " x:", x);
  return x * res;
}

console.log("res:", factorial(9));

//base case is 1
//fist res is 1 and x is 2 so next res is 2
// then x is 3*2 as it counts back up to 5
