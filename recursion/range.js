// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num) {
  if (num === 1) {
    return 1;
  }
  const res = num + recursiveRange(num - 1);
  return res;
}

console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55
