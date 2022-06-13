function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

// will place the arr[start] item in the correct place, with smaller items before it
// returns the final placed item index (where you pivoted)
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[start] > arr[i]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, pivotIndex, start);
  return pivotIndex;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (end <= start) {
    // break out
    return;
  }

  let pivotIndex = pivot(arr, start, end);

  // left side
  quickSort(arr, start, pivotIndex - 1);

  // right side
  quickSort(arr, pivotIndex + 1, end);

  return arr;
}

console.log(quickSort([5, 2, 1, 8, 4, 7, 6, 3, 0, 19, 21, 18, 66]));
