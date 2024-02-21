// Problem
// Given a string, determine if it is a palindrome,
// meaning it reads the same forwards and backwards,
// including spaces and punctuation.
// Return true if it is, false if it is not.

// Examples:
// palindrome("abba") === true
// palindrome("abcdefg") === false

export const palindrome = (str) => {
  const words = str.split("").reverse().join("");
  console.log(words);

  if (words === str) {
    return true;
  } else {
    return false;
  }
};

console.log(palindrome("abba"));
console.log(palindrome("abcdefg"));
console.log(palindrome("12121"));
