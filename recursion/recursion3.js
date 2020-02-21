function capitalizeFirst(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return [];
  }

  newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));

  return newArr.concat(capitalizeFirst(arr.slice(1)));
}

// given answer
// function capitalizeWords(array) {
//   if (array.length === 1) {
//     return [array[0].toUpperCase()];
//   }
//   let res = capitalizeWords(array.slice(0, -1));
//   res.push(array.slice(array.length - 1)[0].toUpperCase());
//   return res;
// }

console.log("1. capitalize first");
console.log(capitalizeFirst(["car", "taco", "banana"]));

function nestedEvenSum(obj, sum = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

console.log("2. nested even sum (answer needed)");
console.log(
  nestedEvenSum({
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  })
); // 6
console.log(
  nestedEvenSum({
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" }
  })
); // 10

function capitalizeWords(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return [];
  }

  newArr.push(arr[0].toUpperCase());

  return newArr.concat(capitalizeWords(arr.slice(1)));
}

console.log("3. capitalize words");
console.log(capitalizeWords(["i", "am", "learning", "recursion"]));

function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log("4. stringify numbers (answer needed)");
console.log(
  stringifyNumbers({
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66
      }
    }
  })
);

function collectStrings(obj) {
  let arrOfStrings = [];

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arrOfStrings.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arrOfStrings = arrOfStrings.concat(collectStrings(obj[key]));
    }
  }

  return arrOfStrings;
}

console.log("5. collect strings (answer needed)");
console.log(
  collectStrings({
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz"
            }
          }
        }
      }
    }
  })
); // ["foo", "bar", "baz"]
