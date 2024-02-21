// Problem
// Write a function getTop2MaxNumbers that takes an array of numbers as input
// and returns an array containing the top two maximum numbers
// from the input array and if there are duplicated numbers, please remove them

// Examples:
// getTop2MaxNumbers([10, 40, 20, 2, 9, 19]) === [40, 20]
// getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]) === [-2, -9]
// getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]) === [40, 20]

export const getTop2MaxNumbers = (numbers) => {
  if (!numbers.length) {
    return [];
  }

  let max1 = numbers[0];
  let max2 = numbers[1];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber > max1) {
      max2 = max1;
      max1 = currentNumber;
    } else if (currentNumber > max2 && currentNumber !== max1) {
      max2 = currentNumber;
    }
  }

  return [max1, max2];
};

console.log(getTop2MaxNumbers([10, 40, 20, 2, 9, 19]));
console.log(getTop2MaxNumbers([-10, -40, -20, -2, -9, -19]));
console.log(getTop2MaxNumbers([10, 40, 20, 2, 40, 9, 19]));
