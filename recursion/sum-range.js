function sumRange(x) {
  if (x === 0) {
    return 0;
  }
  return x + sumRange(x - 1);
}

console.log(sumRange(4));

//brackets for function call result

//1+(0) original x is 1 , basecase is 0
//2+(1)
//3+(3)
//4+(6)

////10
