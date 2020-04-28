// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument
// is not a number, output an error message. We need at least 2 arguments.

// take in an unlimited number of command line arguments

const getArguments = function () {
  const args = process.argv.slice(2);
  // We need at least 2 arguments.
  if (args.length < 2) {
    // print error message
    console.log('Please provide at least 2 arguments');
    // stop the excution of the js
    // return;
    process.exit(1);
  }

  return args;
};

validateAllNums = function (list) {
  for (let i = 0; i < list.length; i++) {
    // If any argument is not a number, output an error message.
    if (isNaN(list[i])) {
      // console.log('Please provide only numbers');
      console.log('Please provide only numbers');
      process.exit(1);
      // return ;
    }
  }

  return list;
};

const convertToNums = function (list) {
  const outputArr = [];

  for (let i = 0; i < list.length; i++) {
    // Convert the args to numbers
    outputArr.push(Number(list[i]));
  }

  return outputArr;
};

const validateAllInt = function (numbersArr) {
  const outputArr = [];

  for (let i = 0; i < numbersArr.length; i++) {
    // If any argument is not a whole number, skip it
    if (numbersArr[i] % 1 === 0) {
      outputArr.push(numbersArr[i]);
      // console.log("whole nb", numbersArr[i])
    }
  }

  return outputArr;
};

const sum = function (numbersArr) {
  // goe through each number
  console.log('numbersArr', numbersArr);
  let total = 0;

  for (let i = 0; i < numbersArr.length; i++) {
    // Add each number to an accumulator
    total += numbersArr[i];
  }

  return total;
};

// print out the sum of them.
console.log(
  sum(validateAllInt(validateAllNums(convertToNums(getArguments()))))
);
