function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) return console.log(false);

  let lookup = {};

  for (let i = 0; i < str1.length; i++) {
    lookup[str1[i]] = (lookup[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (lookup[str2[i]]) {
      lookup[str2[i]]--;
    } else {
      return console.log(false);
    }
  }

  return console.log(true);
}

function sameFrequencyAnswer(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

console.log("1. Frequency counter = sameFrequency");
sameFrequency(182, 281); // true
sameFrequency(34, 14); // false
sameFrequency(3589578, 5879385); // true
sameFrequency(22, 222); // false

function areThereDuplicates() {
  if (arguments.length <= 1) return console.log(false);

  let lookup = {};

  for (let i = 0; i < arguments.length; i++) {
    lookup[arguments[i]] = (lookup[arguments[i]] || 0) + 1;
  }

  for (let item in lookup) {
    if (lookup[item] > 1) return console.log(true);
  }

  return console.log(false);
}

// answer
function areThereDuplicatesAnswer() {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// answer
function areThereDuplicatesAnswerMultiplePointers(...args) {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

function areThereDuplicatesOneLinerAnswer() {
  return new Set(arguments).size !== arguments.length;
}

console.log("2. Frequency counter / multiple pointers = areThereDuplicates");
areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates("a", "b", "c", "a"); // true

// my attempt
// function averagePair(arrNum, averageNum) {
//   if (arrNum.length <= 1) return console.log(false);

//   let i = 0;

//   for (let j = 1; j < arrNum.length; j++) {
//     if ((arrNum[i] + arrNum[j]) / 2 === averageNum) {
//       return console.log(true);
//     } else {
//       i++;
//     }
//   }

//   return console.log(false);
// }

function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return console.log(true);
    else if (avg < num) start++;
    else end--;
  }
  return console.log(false);
}

console.log("3. Multiple Pointers = averagePair (needed answer)");
averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

function isSubsequence(str1, str2) {
  let i = 0;

  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      i++;
    }

    if (i >= str1.length) return console.log(true);
  }

  return console.log(false);
}

// answer
function isSubsequenceAnswer(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// answer 2
function isSubsequenceAnswer2(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

console.log("4. Multiple Pointers = isSubsequence");
isSubsequence("hello", "hello world"); // true
isSubsequence("sing", "sting"); // true
isSubsequence("abc", "abracadabra"); // true
isSubsequence("abc", "acb"); // false

// my attempt
// function maxSubarraySum(arr, amount) {
//   if (arr.length < amount) return console.log(null);

//   let max = -Infinity;

//   for (let i = 0; i < arr.length - amount + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < amount; j++) {
//       temp += arr[i + j];
//     }

//     if (temp > max) {
//       max = temp;
//     }
//   }

//   return console.log(max);
// }

// answer
function maxSubarraySum(arr, num) {
  if (arr.length < num) return console.log(null);

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let currentTotal = total;

  for (let i = num; i < arr.length; i++) {
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }

  return console.log(total);
}

console.log("Max sub array sum");
maxSubarraySum([100, 200, 300, 400], 2); // 700
maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSubarraySum([-3, 4, 0, -2, 6, -1], 2); // 5
maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
maxSubarraySum([2, 3], 3); // null

// my attempt that did not work
// function minSubArrayLen(arr, num) {
//   let minLen = 0;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] >= num && minLen > j - i + 1 && minLen !== 0) {
//         minLen = j - i + 1;
//       }
//     }
//   }

//   return console.log(minLen);
// }

// answer
function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return console.log(minLen === Infinity ? 0 : minLen);
}

console.log("Min sub array length (needed answer)");
minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 because [4,3] is the smallest sub array
minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 because [5,4] is the smallest sub array
minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 because [62] is greater than 52
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0

// answer
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return console.log(longest);
}

console.log("Find longest substring (answer needed)");
findLongestSubstring(""); // 0
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
