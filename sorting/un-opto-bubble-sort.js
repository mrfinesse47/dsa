function bubbleSort(arr) {
  let iterations = 0;
  for (var i = arr.length; i > 0; i--) {
    iterations++;
    for (var j = 0; j < i - 1; j++) {
      iterations++;
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(iterations);
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
