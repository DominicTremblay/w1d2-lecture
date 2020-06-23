// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments

// Extract the command line arguments
// splice or slice
const getArguments = function () {
  const args = process.argv.slice(2);
  // console.log(args);
  // We need at least 2 arguments. ouput an error msg
  if (args.length < 2) {
    console.log('Please provide at least 2 arguments!');
    process.exit(1);
  }
  return args;
};

// convert each argument into a number
const convertToNum = function (list) {
  const numbers = [];
  for (let i = 0; i < list.length; i++) {
    numbers.push(Number(list[i]));
  }
  return numbers;
};

// filter out any argument that is not a number
const filterAllInt = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    // If any argument is not a number, output an error message.
    if (isNaN(numbers[i])) {
      console.log('please provide all numbers');
      process.exit(1);
    }
  }
  return numbers;
};

const getWholeNumbers = function (numbers) {
  const numOutput = [];
  for (let i = 0; i < numbers.length; i++) {
    // If any argument is not a whole number, skip it
    if (numbers[i] % 1 === 0) {
      numOutput.push(numbers[i]);
    }
  }
  return numOutput;
};

const sum = function (numbers) {
  // we need an accumulator
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    // add each number
    const number = numbers[i];
    console.log('index:', i, 'number:', number, 'type:', typeof number);
    total += number;
  }
  // print the sum
  return total;
};

// const convertedNb = convertToNum(args);
// console.log("convertedNb", convertedNb);
// const filteredNb = filterAllInt(convertedNb);
// console.log("filterd nb", filteredNb);
// const wholeNb = getWholeNumbers(filteredNb);
// console.log("Whole Nb:", wholeNb);


const result = sum(getWholeNumbers(filterAllInt(convertToNum(getArguments()))));
console.log('Total:', result);
