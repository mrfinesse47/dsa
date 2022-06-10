function power(base, exp) {
  if (exp === 0) {
    console.log("base case");
    return 1;
  }
  console.log("exp:", exp);
  const res = base * power(base, exp - 1);
  console.log("res:", res);
  console.log("exp:", exp);
  return res;
}

console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
