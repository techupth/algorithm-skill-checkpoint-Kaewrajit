// Problem
// Given a string,
// find and return the character that appears most frequently in the string.

// Examples:
// getMaxCharacters("abcccccccd") === "c"
// getMaxCharacters("apple 1231111") === "1"

export const getMaxCharacters = (str) => {
  const charCount = {};
  console.log(str);
  for (const word of str) {
    if (charCount[word]) {
      charCount[word]++;
    } else {
      charCount[word] = 1;
    }
  }

  let maxChar = "";
  let maxCount = 0;

  for (const word in charCount) {
    if (charCount[word] > maxCount) {
      maxChar = word;
      maxCount = charCount[word];
    }
  }

  return maxChar;
};
console.log(getMaxCharacters("abcccccccd"));
console.log(getMaxCharacters("apple 1231111"));
console.log(getMaxCharacters("apple 1255555555"));
