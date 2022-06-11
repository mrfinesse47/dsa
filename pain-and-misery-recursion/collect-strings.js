const collectStrings = (obj) => {
  let resultArr = [];
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      resultArr = [...resultArr, ...collectStrings(obj[key])];
    }
    if (typeof obj[key] === "string") {
      resultArr.push(obj[key]);
    }
  }
  return resultArr;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
