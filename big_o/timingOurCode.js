function addUpTo(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

console.time('performance');
addUpTo(10000);
console.timeEnd('performance');

console.time('second');
addUpTo2(10000);
console.timeEnd('second');
