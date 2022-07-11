// Input: [2, 1, 5, 2, 3, 2], S=7
// Output: 2
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [5, 2].

// Input: [2, 1, 5, 2, 8], S=7
// Output: 1
// Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

function smallestSub(arr, sum) {
  let start = 0;
  let count = 0;
  let min = null;
  let length = 0;

  for (let end = 0; end < arr.length; end++) {
    count += arr[end];

    while (count >= sum) {
      length = end - start + 1;
      if (!min || length < min) {
        min = length;
      }
      count -= arr[start];
      start++;
    }
  }

  return min;
}

console.log(smallestSub([2, 1, 5, 2, 3, 2], 7));
console.log(smallestSub([2, 1, 5, 2, 8], 7));
console.log(smallestSub([3, 4, 1, 1, 6], 8));
