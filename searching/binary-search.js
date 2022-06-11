const input = [
  -1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 22, 44, 56, 79, 80, 99, 101, 201, 300, 312,
  333,
];

const binarySearch = (arr, num, startIndex = 0, endIndex = arr.length - 1) => {
  const halfWayIndex = parseInt((endIndex + startIndex) / 2);
  const halfWaynum = arr[halfWayIndex];

  if (num === halfWaynum) {
    return halfWayIndex;
  } else if (num === arr[startIndex]) {
    return startIndex;
  } else if (num === arr[endIndex]) {
    return endIndex;
  } else if (num > halfWaynum) {
    return binarySearch(arr, num, (startIndex = halfWayIndex), endIndex);
  } else if (num < halfWaynum) {
    return binarySearch(arr, num, startIndex, (endIndex = halfWayIndex));
  } else {
    return -1;
  }
};

console.log(binarySearch(input, -1));
