function sumZero(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < arr.length && i !== j) {
    if (arr[i] + arr[j] > 0) {
      j--;
    } else if (arr[i] + arr[j] < 0) {
      i++;
    } else {
      return [arr[i], arr[j]];
    }
  }
}

console.log(sumZero([-5, -4, -3, -2, -1, 0, 1, 2, 3])); //[-3,3]
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3]
console.log(sumZero([-2, 0, 1, 3])); //undefined
console.log(sumZero([1, 2, 3])); //undefined
console.log(sumZero([-6, -7, 1, 2, 9, 10, 11, 18])); //undefined
console.log(sumZero([-1, 0, 1]));
