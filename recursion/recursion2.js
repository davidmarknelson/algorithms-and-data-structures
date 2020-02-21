function reverse(str) {
  if (str.length === 1) return str[0];
  return reverse(str.slice(1)) + str[0];
}

console.log("1. reverse");
console.log(reverse("awesome")); // emosewa
console.log(reverse("rithmschool")); // loohcsmhtir

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}

console.log("2. is palindrome");
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
  if (callback(arr[0])) {
    return true;
  } else {
    return someRecursive(arr.slice(1), callback);
  }
}

console.log("3. some recursive (answer needed)");
console.log(someRecursive([1, 2, 3, 4], val => val % 2 !== 0)); // true
console.log(someRecursive([4, 6, 8, 9], val => val % 2 !== 0)); // true
console.log(someRecursive([4, 6, 8], val => val % 2 !== 0)); // false
console.log(someRecursive([4, 6, 8], val => val > 10)); // false

function flatten(oldArr) {
  let newArr = [];
  for (let i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log("4. flatten (answer needed)");
console.log(flatten([1, 2, 3, [4, 5]])); // [1,2,3,4,5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1,2,3,4,5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
