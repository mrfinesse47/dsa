function capitalizeFirst(arr) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  let newArr = []; //a new arr is required as to not affect the mem loc of arr, its  basically a new pointer
  if (arr.length === 0) {
    console.log("base case:", newArr);
    return newArr;
  }

  newArr.push(capitalizeFirstLetter(arr[0]));
  const res = newArr.concat(capitalizeFirst(arr.slice(1)));
  console.log("newarr:", newArr);
  console.log("res:", res);
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
