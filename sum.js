// - Write a node program that takes in an unlimited number of command line arguments,
// goes through each and prints out the sum of them.

// edge cases
// If any argument is not a whole number, skip it. Do support negative numbers though.
// If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments



const getArguments = function () {
  const args = process.argv.slice(2);
  // We need at least 2 arguments.
  if (args.length < 2) {
    console.log('Please enter at least 2 arguments');
    process.exit(1);
  }
  return args;
};

const convertToNums = function (list) {
  const numbers = [];

  for (let i = 0; i < list.length; i++) {
    numbers.push(Number(list[i]));
  }

  return numbers;
};

const validateNumbers = function (list) {
  for (let i = 0; i < list.length; i++) {
    // If any argument is not a number, output an error message.
    if (isNaN(list[i])) {
      console.log('Please enter all numbers');
      process.exit(1);
    }
  }
  return list;
};

const filterAllInt = function (list) {
  const numbers = [];

  for (let i = 0; i < list.length; i++) {
    // console.log(
    //   'Index:',
    //   i,
    //   'val:',
    //   list[i],
    //   'dec part:',
    //   list[i] - parseInt(list[i])
    // );

    // If any argument is not a whole number, skip it.
    // if (number % 1 === 0)
    if (list[i] - parseInt(list[i]) === 0) {
      numbers.push(list[i]);
    }
  }

  return numbers;
};

const sum = function (numbers) {
  // accumuator for the sum
  let total = 0;

  // goes through each
  for (let i = 0; i < numbers.length; i++) {
    // console.log(
    //   'Index:',
    //   i,
    //   'value:',
    //   args[i],
    //   'type of value:',
    //   typeof args[i]
    // );

    total +=  numbers[i];
  }
  return total;
};

// prints out the sum of them
const result = sum(
  filterAllInt(validateNumbers(convertToNums(getArguments())))
);

console.log('total:', result);
