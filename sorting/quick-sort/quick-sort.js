function quickSort(arr) {
  const obj = pivotHelper(arr);
  return Object.values(obj);
}

function pivotHelper(arr, startIndex = 0) {
  let resObj = {};
  if (arr.length === 1) {
    resObj[startIndex] = arr[0];
    return resObj;
  }

  const lhs = [];
  const rhs = [];

  let howManyLess = 0;
  arr.forEach((el) => {
    if (arr[0] > el) {
      howManyLess++;
      lhs.push(el);
    } else if (arr[0] < el) {
      rhs.push(el);
    } //cant handle equal
  });
  resObj[howManyLess + startIndex] = arr[0];

  if (lhs.length > 0) {
    resObj = { ...resObj, ...pivotHelper(lhs, startIndex) };
  }
  if (rhs.length > 0) {
    resObj = { ...resObj, ...pivotHelper(rhs, howManyLess + startIndex + 1) };
  }

  return resObj;
}

const arr = [9, 2, 5, 11, 23, 43];

console.log(quickSort(arr));
