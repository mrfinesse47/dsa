//Implement a function that reverses a string using iteration...and then recursion!

function reverseStringI(str) {
  res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

console.log(reverseStringI("yoyo mastery"));
//should return: 'yretsam oyoy'

function reverseStrR(str) {
  let index = str.length - 1;
  let res = "";
  recurse(str);
  return res;
  function recurse(str) {
    if (index < 0) {
      return;
    }
    res += str[index];
    index--;
    recurse(str);
  }
}

console.log(reverseStrR("yoyo mastery"));

function reverseStrTrueR(str, index = str.length - 1, res = "") {
  if (index < 0) {
    return res;
  }
  res += str[index];
  return reverseStrTrueR(str, index - 1, res); //dont forget to bubble back the result
}

console.log(reverseStrTrueR("yoyo mastery"));
