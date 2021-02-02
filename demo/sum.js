// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments
// edge case: We need at least 2 arguments.
const getArguments = function () {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log('Please provide at least 2 numbers');
    process.exit(); // stopping the execution
  }

  return args;
};

// convert each to an actual number
const convertToNums = function (numbers) {
  const outputNums = [];

  for (let i = 0; i < numbers.length; i++) {
    outputNums.push(Number(numbers[i]));
  }

  return outputNums;
};

  // Egde cases:
  //  - If any argument is not a number, output an error message.
const allNums = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i])) {
      console.log('Please provide only numbers');
      process.exit();
    }
  }

  return numbers;
};

//  - If any argument is not a whole number, skip it

const allIntegers = function (numbers) {
  const outputNums = [];

  for (let i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i])) {
      outputNums.push(numbers[i]);
    }
  }

  return outputNums;
};

const sum = function (numbers) {
  // Create a variable to store the sum
  let total = 0;

  // goes through each - iterate through the array


  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
    console.log('i:', i, 'number:', numbers[i], 'total:', total);
  }

  // prints out the sum of them
  return total;
};


console.log('Sum:', sum(allIntegers(allNums(convertToNums(getArguments())))));
