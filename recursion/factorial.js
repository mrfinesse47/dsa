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

//x is going to do its thing and is just based on the input, the result varies
// base case: 1
// res: 1  x: 2
// res: 2  x: 3
// res: 6  x: 4
// res: 24  x: 5
// res: 120  x: 6
// res: 720  x: 7
// res: 5040  x: 8
// res: 40320  x: 9
// res: 362880
