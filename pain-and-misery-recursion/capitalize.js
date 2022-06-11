function capitalizeFirst(arr) {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }

  newArr.push(capitalizeFirstLetter(arr[0]));
  return newArr.concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
