function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];
  if (arr.length === 0) {
    return [];
  }
  newArr.push(arr[0].toUpperCase());

  return newArr.concat(capitalizeWords(arr.slice(1)));
}

let words = ["i", "am", "learning", "recursion"];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
