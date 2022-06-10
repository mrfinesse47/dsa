function collectOddValues(arr) {
  //   console.log("before arr:", arr);
  let newArr = [];
  if (arr.length === 0) {
    console.log("basecase, begin returns");
    return newArr; //basecase empty []
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  //console.log("function result:", collectOddValues(arr.slice(1)));
  //console.log(newArr);
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  //console.log("function begins returning");
  //console.log("arr:", arr);
  //console.log("newArr:", newArr);
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));
