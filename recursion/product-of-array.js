// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

const productOfArray = (arr) => {
  if (arr.length === 0) {
    console.log("base case hit!");
    return 1;
  }
  console.log("arr before:", arr);
  const res = arr[0] * productOfArray(arr.slice(1));
  //iterates over arr[0], accumulates over res
  console.log("arr after:", arr);
  console.log("res after:", res);
  return res;
};

console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
