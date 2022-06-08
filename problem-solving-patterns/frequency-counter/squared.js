//same([1,2,3],[4,1,9])--true
//same([1,2,3],[1,9])--false
//same([1,2,1],[4,4,1])--false

// const same = (arr1, arr2) => {
//   let arr1num = 0;
//   let arr2num = 0;
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     arr1num += Math.pow(10, arr1[i] * arr1[i]);
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     arr2num += Math.pow(10, arr2[i]);
//   }

//   console.log(arr1num);
//   console.log(arr2num);

//   if (arr2num - arr1num === 0) {
//     return true;
//   }
//   return false;
// };

function same(arr1, arr2) {
  const obj1 = {};
  const obj2 = {};
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!obj1[arr1[i] * arr1[i]]) {
      obj1[arr1[i] * arr1[i]] = 0;
    }
    obj1[arr1[i] * arr1[i]] += 1;
    if (!obj2[arr2[i]]) {
      obj2[arr2[i]] = 0;
    }
    obj2[arr2[i]] += 1;
  }

  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(same([1, 2, 3], [4, 1, 9])); //true

// console.log(same([1, 2], [1, 2, 3])); //false
// console.log(same([1, 2, 1], [4, 4, 1])); //false
// console.log(
//   same(
//     [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3],
//     [1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 9, 9, 9, 9, 9, 9]
//   )
// ); //true
