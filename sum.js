// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// Extract an unlimited number of command line arguments
// process.argv

const getArguments = function () {
  const args = process.argv.slice(2);
  // We need at least 2 arguments.

  if (args.length < 2) {
    console.log('Please provide at least 2 numbers');
    process.exit(1);
  }

  return args;
};

// console.log("args:", args);

// goes through each and prints out the sum of them
// accumulator to add the total

// args.forEach(function(nb) {
//   console.log(nb);
// })

const convertToNum = function (list) {
  const outputArr = [];

  for (let i = 0; i < list.length; i++) {
    outputArr.push(Number(list[i]));
  }

  return outputArr;
};

const allNumbers = function (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i])) {
      // output error message

      console.log('Please provide only numbers');
      process.exit(1);
    }
  }
  return numbers;
};

const allInt = function (numbers) {
  const outputArr = [];

  for (let i = 0; i < numbers.length; i++) {
    //If any argument is not a whole number, skip it.
    if (numbers[i] % 1 === 0) {
      // this is a whole number

      outputArr.push(numbers[i]);
    }
  }

  return outputArr;
};

const sum = function (numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    // console.log("index:", i, "Number:", numbers[i], "Type:", typeof(numbers[i]), "ConvertedToNum:", Number(numbers[i]));
    // tranform the argument into a number
    // const number = Number(numbers[i]);
    // If any argument is not a number, output an error message
    // if (isNaN(number)) {
    //   // output error message
    //   console.log('Please provide only numbers');
    //   process.exit(1);
    // }

    total += numbers[i];


  }

  return total;
};

const result = sum(allInt(allNumbers(convertToNum(getArguments()))));

console.log("Result:", result);