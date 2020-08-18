// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments
// for loop?
// process.argv

const getArguments = function () {
  const args = process.argv.slice(2);
  // We need at least 2 arguments.
  if (args.length < 2) {
    console.log('Please provide at least 2 arguments');
    process.exit(1);
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
    // If any argument is not a number, output an error message.
    if (isNaN(numbers[i])) {
      console.log('Please provide only numbers');
      process.exit(1);
    }
  }
  return numbers;
};

const getAllInt = function (numbers) {
  const output = [];

  for (let i = 0; i < numbers.length; i++) {
    // If any argument is not a whole number, skip it.

    // add the currentNumber to total
    // total <= total + currentNumber
    if (Math.floor(numbers[i]) === numbers[i]) {
      output.push(numbers[i]);
    }
  }

  return output;
};

const sum = function (numbers) {
  // goes through each number and add them up

  // declare an accumulator

  let total = 0;

  // c-style for loop
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];

    console.log(
      'Index:',
      i,
      'Current Number',
      numbers[i],
      'type:',
      typeof numbers[i]
    );
  }

  return total;
};

// prints out the sum of them.

const result = sum(getAllInt(validateAllNums(convertToNums(getArguments()))));

console.log(result);