const maxSubArraySum = (arr, count) => {
  let sum = 0;
  let i = 0;
  let maxSum;

  if (arr.length < count) {
    return null;
  }

  while (i < arr.length) {
    if (i < count) {
      sum += arr[i];
      maxSum = sum;
    } else {
      sum = sum + arr[i] - arr[i - count];
      if (sum > maxSum) {
        maxSum = sum;
      }
    }
    i++;
  }
  return maxSum;
};

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17

// 1+2+5+2 = 10
// 9 + 8 - 1 = 17
// 17 + 1 -2 = 16
// 16 + 5 -5 = 16

//just add the next one and subtract the one that is out of the window.

console.log(maxSubArraySum([4, 2, 1, 6, 9, 0, 2, 99, 1, 4, 2], 1)); //6

console.log(maxSubArraySum([], 4)); //null
