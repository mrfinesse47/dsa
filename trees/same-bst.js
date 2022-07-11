function sameBsts(arrayOne, arrayTwo) {
  // Write your code here.
  let result = true;
  if (arrayTwo.length !== arrayTwo.length) return false;
  compare(arrayOne, arrayTwo);
  return result;

  function compare(arr1, arr2) {
    let shifedEl;

    if (arr1.length > 0) {
      if (arr1[0] !== arr2[0]) {
        result = false;
      }
      if (result) {
        shifedEl = arr1.shift();
        arr2.shift();

        compare(
          arr1.filter((el) => el >= shifedEl),
          arr2.filter((el) => el >= shifedEl)
        );
        compare(
          arr1.filter((el) => el < shifedEl),
          arr2.filter((el) => el < shifedEl)
        );
      }
    }
  }
}

console.log(
  sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81])
);
