function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log("1. power");
console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16

function factorial(num) {
  if (num < 0) return 0;
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log("2. factorial");
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040

function productOfArray(arr) {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

console.log("3. product of array");
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log("4. recursive range");
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

console.log("5. fib (answer needed)");
console.log(fib(4)); // 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465
