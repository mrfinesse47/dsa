function mergeSort(arr) {
  const halfWayIndex = Math.ceil(arr.length / 2);

  if (arr.length < 1) {
    return arr;
  }
  if (arr.length === 2) {
    if (arr[0] > arr[1]) {
      const temp = arr[0];
      arr[0] = arr[1];
      arr[1] = temp;
      return arr;
    }
  }
  let lhs = arr.slice(0, halfWayIndex);
  let rhs = arr.slice(halfWayIndex);

  if (lhs.length > 2) {
    lhs = mergeSort(lhs);
  }
  if (rhs.length > 2) {
    rhs = mergeSort(rhs);
  }

  return merge(lhs, rhs);
}

function merge(arr1, arr2) {
  const res = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      res.push(arr2[j]);
      j++;
    } else if (arr1[i] === arr2[j]) {
      res.push(arr1[i]);
      res.push(arr2[j]);
      i++;
      j++;
    } else {
      if (i < arr1.length) {
        res.push(arr1[i]);
        i++;
      }
      if (j < arr2.length) {
        res.push(arr2[j]);
        j++;
      }
    }
  }
  return res;
}

console.log(mergeSort([1, 2, 3, 4]));
