let unflatArray = [55, 23, [45, 7, [9, 2, [67], 6, 1], 54, 23, [99, 92], 45]];
let flatArray = [];

function flatten(array) {
  return array.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flat(item) : item);
  }, []);
}

console.log(flat(unflatArray));
