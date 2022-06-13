//radix sort is good for intergers only
//step 1: find the max num of digits
//loop from 0-3 for a 4 digit num for example
//each iteration create buckets for each digit 0-9
//a bucket is a empty array, so we will have an array with 10 sub arrays
//place each number in the corresponding bucket based on the ith digit
//then once the outer loop goes by re assemble into an array based on the order of the buckets
//repeat for the next digit until you reach the max digits

function radixSort([...arr]) {
  for (let i = 0; i < mostDigits(arr); i++) {
    const bucketsArr = [];
    for (let j = 0; j < arr.length; j++) {
      const currentDigit = getDigit(arr[j], i);
      if (!Array.isArray(bucketsArr[currentDigit])) {
        bucketsArr[currentDigit] = [];
      }
      bucketsArr[currentDigit].push(arr[j]);
    }
    arr = [];
    bucketsArr.forEach((bucket) => {
      if (bucket.length > 0) {
        arr = arr.concat(bucket);
      }
    });
  }
  return arr;
}

//helper functions

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
  maxCount = 0;
  arr.forEach((num) => {
    maxCount = Math.max(digitCount(num), maxCount);
  });
  return maxCount;
}

//console.log(digitCount(235523)); //4
const input = [66, 8675, 543, 00, 65, 0, 98, 65867];

console.log(radixSort([66, 8675, 543, 00, 65, 0, 98, 65867])); //5
console.log(input);
