function validAnagram(str1, str2) {
  if (str1 === str2) return console.log("true");
  if (str1.length !== str2.length) return console.log("false");

  let counterObj1 = {};
  let counterObj2 = {};

  for (let char of str1) {
    counterObj1[char] = (counterObj1[char] || 0) + 1;
  }
  for (let char of str2) {
    counterObj2[char] = (counterObj2[char] || 0) + 1;
  }

  for (let key in counterObj1) {
    if (!(key in counterObj2)) return console.log("false");

    if (counterObj2[key] !== counterObj1[key]) return console.log("false");
  }

  return console.log("true");
}

function validAnagramAnswer(first, second) {
  if (first.length !== second.length) return console.log("false");

  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return console.log("false");
    } else {
      lookup[letter] -= 1;
    }
  }

  return console.log("true");
}

console.log("Valid Anagram");
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false
validAnagram("awesome", "awesom"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true

console.log("Valid Anagram Answer");
validAnagramAnswer("", ""); // true
validAnagramAnswer("aaz", "zza"); // false
validAnagramAnswer("anagram", "nagaram"); // true
validAnagramAnswer("rat", "car"); // false
validAnagramAnswer("awesome", "awesom"); // false
validAnagramAnswer("qwerty", "qeywrt"); // true
validAnagramAnswer("texttwisttime", "timetwisttext"); // true
