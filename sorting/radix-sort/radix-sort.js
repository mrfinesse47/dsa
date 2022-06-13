//radix sort is good for intergers only

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
    const count = digitCount(num);
    if (count > maxCount) {
      maxCount = count;
    }
  });
  return maxCount;
}

//console.log(digitCount(235523)); //4
// console.log(mostDigits([66, 8675, 543, 00, 65, 0000000, 98, 65867]));//5
