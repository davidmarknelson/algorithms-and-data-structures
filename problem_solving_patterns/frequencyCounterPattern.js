function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return console.log(false);

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) {
      return console.log(false);
    }

    arr2.splice(correctIndex, 1);
  }

  return console.log(true);
}

console.log("Naive");
// should return false
same([1, 2, 3], [1, 4]);
// should return true
same([1, 2, 3], [1, 4, 9]);
// should return false
same([1, 2, 1], [1, 4, 4]);

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return console.log(false);

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return console.log(false);

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key])
      return console.log(false);
  }

  return console.log(true);
}

console.log("Refactor");
// should return false
same2([1, 2, 3], [1, 4]);
// should return true
same2([1, 2, 3], [1, 4, 9]);
// should return false
same2([1, 2, 1], [1, 4, 4]);
