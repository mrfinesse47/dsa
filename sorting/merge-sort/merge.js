module.exports = merge = (arr1, arr2) => {
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
};

console.log(merge([1, 3, 10, 50], [1, 2, 14, 45, 100, 999]));
