// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// Extract an unlimited number of command line arguments
const args = process.argv.slice(2);
// console.log("args:", args);
// Edge case:  We need at least 2 arguments. => if statement
if (args.length < 2) {
  console.log('Please provide at least 2 arguments');
  return;
}

const convertToNums = function (numbers) {
  const outputNums = [];
  for (let num of numbers) {
    outputNums.push(Number(num));
  }

  return outputNums;
};

const allInt = function (numbers) {
  const outputNums = [];
  for (let num of numbers) {
    if (Number.isInteger(num)) {
      outputNums.push(Number(num));
    }
  }
  return outputNums;
};

const allNums = function (numbers) {
  for (let num of numbers) {
    // Edge case: If any argument is not a number, output an error message.
    if (isNaN(num)) {
      console.log('Please provide only numbers!');
      process.exit();
    }
  }
  return numbers;
};

// single-responsibility principle => a function should do a single thing

const sum = function (numbers) {
  // goes through each number
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    // calculate the sum => print it out
    // total <- total + num;
    total += num;

    console.log('num:', num, 'type:', typeof num, 'total:', total);
  }
  return total;
};

console.log('Total:', sum(allInt(allNums(convertToNums(args)))));
