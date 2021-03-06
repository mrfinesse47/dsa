//O(n)log(n)//best for data agnostic

function mergeSort(arr) {
  const halfWayIndex = Math.floor(arr.length / 2);

  if (arr.length <= 1) {
    return arr;
  }

  let lhs = arr.slice(0, halfWayIndex);
  let rhs = arr.slice(halfWayIndex);

  lhs = mergeSort(lhs);

  rhs = mergeSort(rhs);

  return merge(lhs, rhs);
}

function merge(arr1, arr2) {
  //orders 2 SORTED arrays to ONE in order
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

const input = [1, 44, 2, 5, 64, 2343, 2, 5, 77, 64, 34];

// const input = [
//   95, 1, 59, 98, 76, 9, 34, 59, 26, 63, 7, 80, 97, 23, 7, 17, 49, 61, 27, 65,
//   10, 59, 4, 89, 51, 55, 42, 40, 37, 87, 33, 13, 46, 92, 78, 64, 94, 47, 47, 85,
//   21, 85, 34, 17, 82, 57, 20, 13, 48, 95, 50, 61, 34, 47, 60, 5, 31, 59, 93, 78,
//   18, 28, 63, 43, 49, 41, 66, 71, 44, 47, 96, 51, 44, 0, 16, 47, 84, 34, 12, 83,
//   89, 36, 60, 100, 43, 38, 69, 63, 28, 34, 40, 16, 59, 51, 26, 75, 10, 74, 98,
//   76, 16, 93, 49, 85, 55, 17, 57, 49, 19, 51, 63, 52, 43, 38, 53, 18, 46, 49,
//   88, 83, 31, 43, 28, 13, 56, 12, 78, 19, 48, 52, 17, 36, 38, 11, 5, 95, 12, 29,
//   68, 82, 82, 1, 67, 42, 49, 36, 32, 73, 37, 93, 45, 90, 71, 84, 97, 77, 29,
//   100, 22, 9, 57, 79, 99, 16, 82, 32, 77, 40, 16, 56, 46, 10, 5, 52, 99, 79, 13,
//   12, 46, 26, 47, 96, 42, 38, 14, 99, 24, 98, 100, 56, 50, 82, 42, 31, 54, 90,
//   9, 89, 35, 55, 8, 7, 14, 97, 71, 4, 38, 32, 98, 94, 5, 89, 1, 75, 67, 53, 35,
//   22, 57, 3, 64, 16, 17, 63, 3, 100, 54, 24, 87, 81, 81, 10, 97, 82, 22, 34, 50,
//   11, 88, 92, 57, 25, 42, 54, 60, 48, 77, 8, 83, 50, 57, 96, 10, 64, 90, 69, 30,
//   2, 61, 48, 45, 11, 20, 58, 77, 90, 91, 47, 35, 2, 69, 96, 60, 27, 29, 22, 62,
//   70, 23, 31, 12, 39, 71, 74, 81, 82, 80, 43, 1, 19, 17, 4, 8, 70, 74, 80, 64,
//   11, 85, 59, 42, 8, 88, 72, 34, 27, 57, 58, 57, 5, 46, 32, 67, 22, 51, 41, 45,
//   96, 46, 2, 10, 29, 53, 16, 74, 58, 2, 37, 92, 1, 3, 15, 30, 16, 81, 68, 70, 0,
//   91, 38, 6, 46, 78, 43, 66, 79, 20, 36, 85, 82, 27, 5, 63, 38, 38, 80, 44, 7,
//   49, 68, 22, 48, 93, 95, 7, 22, 1, 38, 93, 31, 20, 14, 75, 61, 67, 60, 76, 47,
//   54, 52, 34, 68, 34, 12, 27, 18, 57, 50, 50, 64, 79, 78, 90, 13, 85, 36, 61,
//   20, 12, 67, 70, 38, 70, 41, 59, 45, 59, 72, 85, 28, 40, 68, 55, 69, 25, 32,
//   74, 10, 52, 94, 96, 10, 56, 31, 10, 4, 63, 67, 8, 3, 72, 65, 99, 69, 86, 9,
//   32, 16, 38, 24, 10, 69, 100, 22, 85, 47, 43, 59, 48, 82, 99, 60, 8, 71, 93,
//   40, 100, 55, 52, 42, 78, 46, 39, 60, 36, 67, 27, 30, 3, 70, 29, 8, 75, 86, 96,
//   75, 28, 8, 12, 97, 15, 35, 31, 98, 11, 54, 92, 59, 96, 32, 65, 88, 31, 98, 67,
//   94, 74, 78, 31, 82, 4, 79, 44, 11, 19, 36, 71, 37, 43, 57, 51, 93, 12, 20, 54,
//   37, 29, 19, 26, 29, 74, 49, 69, 3, 49, 96, 20, 98, 53, 2, 60, 38, 2, 34, 74,
//   97, 64, 80, 99, 92, 56, 32, 6, 76, 30, 67, 52, 56, 28, 64, 38, 16, 63, 13, 47,
//   91, 31, 56, 67, 30, 94, 71, 92, 92, 76, 88, 55, 28, 35, 35, 65, 7, 83, 98, 80,
//   97, 90, 72, 35, 38, 90, 23, 100, 40, 44, 5, 88, 93, 9, 93, 51, 5, 94, 54, 47,
//   86, 47, 77, 49, 16, 16, 37, 73, 11, 88, 56, 93, 56, 9, 57, 66, 28, 16, 37, 2,
//   27, 7, 29, 78, 75, 2, 83, 16, 29, 94, 8, 10, 39, 77, 30, 94, 12, 15, 56, 5,
//   48, 70, 15, 82, 4, 0, 23, 17, 61, 49, 87, 68, 1, 17, 80, 49, 3, 95, 0, 60, 72,
//   75, 80, 71, 80, 16, 97, 60, 48, 12, 42, 42, 51, 3, 38, 46, 46, 5, 54, 2, 8,
//   95, 21, 30, 14, 15, 4, 25, 46, 47, 87, 10, 10, 72, 49, 50, 68, 69, 29, 89, 97,
//   84, 21, 82, 52, 12, 50, 41, 64, 17, 83, 18, 55, 51, 4, 27, 21, 18, 17, 24, 12,
//   93, 84, 11, 73, 19, 75, 9, 78, 79, 8, 65, 1, 95, 55, 16, 25, 86, 18, 24, 83,
//   93, 41, 90, 63, 83, 65, 4, 11, 27, 95, 34, 62, 7, 20, 24, 2, 24, 52, 47, 43,
//   35, 36, 34, 92, 63, 6, 11, 57, 2, 3, 30, 77, 61, 33, 98, 97, 8, 0, 81, 60, 63,
//   5, 8, 44, 2, 23, 73, 70, 93, 76, 97, 20, 74, 78, 1, 100, 46, 7, 100, 96, 82,
//   93, 46, 69, 99, 76, 48, 53, 99, 9, 89, 36, 1, 28, 33, 50, 20, 76, 85, 70, 55,
//   65, 94, 57, 50, 43, 94, 44, 28, 68, 39, 97, 94, 54, 1, 94, 1, 20, 66, 51, 9,
//   51, 62, 2, 1, 50, 79, 20, 84, 99, 51, 37, 11, 68, 55, 73, 20, 95, 22, 25, 40,
//   45, 78, 92, 4, 71, 17, 3, 1, 68, 49, 49, 40, 91, 12, 5, 44, 73, 70, 30, 7, 75,
//   97, 16, 32, 56, 37, 14, 24, 30, 100, 97, 14, 66, 49, 67, 15, 11, 33, 96, 11,
//   60, 91, 21, 42, 35, 71, 20, 34, 78, 0, 67, 87, 64, 97, 8, 76, 81, 72, 57, 56,
//   23, 70, 100, 82, 0, 65, 79, 3, 8, 11, 74, 36, 2, 94, 22, 53, 76, 65, 17, 47,
//   39, 65, 12, 34, 95, 41, 40, 69, 32, 89, 25, 74, 87, 85, 9, 79, 28, 66, 96, 99,
//   85, 72, 92, 77, 33, 42, 92, 41, 93, 50, 56, 99, 93, 61, 82, 85, 2, 91, 43, 66,
//   88, 64, 76, 96, 12, 4, 15, 7, 0, 91, 63, 26, 97, 19, 53, 98, 94, 23, 65, 21,
//   83, 60, 81,
// ];

console.log(mergeSort(input));
