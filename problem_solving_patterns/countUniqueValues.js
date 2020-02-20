// array must be sorted

// my attempt
function countUniqueValues(arr) {
  if (arr.length === 0) return console.log(0);

  let count = 1;

  let uniqueValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== uniqueValue) {
      count += 1;
      uniqueValue = arr[i];
    }
  }

  console.log(count);
}

console.log("==============");
countUniqueValues([1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4

// answer
function countUniqueValues2(arr) {
  if (arr.length === 0) return console.log(0);

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr.splice(i, 1, arr[j]);
    }
  }

  console.log(i + 1);
}

console.log("==============");
countUniqueValues2([1, 1, 1, 1, 2]); // 2
countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues2([]); // 0
countUniqueValues2([-2, -1, -1, 0, 1]); // 4
