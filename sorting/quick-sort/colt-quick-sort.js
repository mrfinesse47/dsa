function quickSort(arr, start = 0, end = arr.length) {
  if (start <= end) {
    return arr;
  }
  let pivotIndex = pivot(arr, start, end);

  quickSort(arr, pivotIndex + 1, end);
  quickSort(arr, start, pivotIndex + 1);

  return arr;
}
function pivot(arr, start = 0, end) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

console.log(quickSort([4, 9, 4, 6, 2, 5, 3, 10, 19, 1, 66, 2, 2, -1, 43, 12]));
//      [4,6,9,1,2,5,3]
//      [3,2,1,4,6,9,5]
//             4
//       3,2,1   6,9,5
//           3     6
//       2,1     5,  9
//         2
//       1
