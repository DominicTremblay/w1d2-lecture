// Write a node program that takes in an unlimited number of command line arguments,
// goes through each and prints out the sum of them. If any argument is not a whole number, skip it.
// Do support negative numbers though.
// If any argument is not a number, output an error message. We need at least 2 arguments.

// Version control
// Create a github repo...
// create branch
// Make regular commits

const getArguments = function () {
  // takes in an unlimited number of command line arguments
  const args = process.argv.slice(2);

  // We need at least 2 arguments.

  if (args.length < 2) {
    console.log('Please provide at least 2 arguments');
    process.exit();
  }

  return args;
};

const convertToNums = function (numbers) {
  const output = [];
  for (let i = 0; i < numbers.length; i++) {
    output.push(Number(numbers[i]));
  }
  return output;
};

const validateAllNums = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    // If any argument is not a number, output an error message
    // check if the number is NaN

    if (isNaN(numbers[i])) {
      console.log('Please provide only numbers');
      process.exit();
    }
  }

  return numbers;
};

const sum = function (numbers) {
  // input => array of numbers

  // create an accumulator (total)
  let total = 0;

  // goes through each
  for (let i = 0; i < numbers.length; i++) {
    // converting to number
    // const number = Number(numbers[i]);

    const number = numbers[i];

    // Add them up to the total
    // If any argument is not a whole number, skip it.
    if (number % 1 === 0) {
      total += number;
    }

    console.log('index:', i, 'number:', numbers[i], 'total:', total);
  }

  // return the total
  return total;
};

const result = sum(validateAllNums(convertToNums(getArguments())));
console.log(result);
