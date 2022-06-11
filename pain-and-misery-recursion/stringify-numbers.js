//similar to deep copying

function stringifyNumbers(obj) {
  let newObj = {};

  if (Array.isArray(obj)) {
    const newArr = [];
    obj.forEach((el) => {
      if (typeof el === "number") {
        newArr.push(String(el));
      } else if (typeof el === "object") {
        newArr.push(stringifyNumbers(el));
      } else {
        newArr.push(el);
      }
    });
    return newArr;
  }

  for (const key in obj) {
    if (typeof obj[key] === "object") {
      newObj[key] = stringifyNumbers(obj[key]);
    } else if (typeof obj[key] === "number") {
      newObj[key] = String(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

let obj = {
  num: 1,
  test: [1, 2, 3, true, { num: 1 }, [1]],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

console.log(typeof []);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
