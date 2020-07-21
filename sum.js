// - Write a node program that takes in an unlimited number of command line arguments,
// goes through each and prints out the sum of them.

// edge cases
// If any argument is not a whole number, skip it. Do support negative numbers though.
// If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments
const args = process.argv.slice(2);

const sum = function (numbers) {
  // accumuator for the sum
  let total = 0;

  // goes through each
  for (let i = 0; i < args.length; i++) {
    console.log(
      'Index:',
      i,
      'value:',
      args[i],
      'type of value:',
      typeof args[i]
    );
    // add each value to the total
    total += Number(args[i]);
  }
  return total;
};


// prints out the sum of them
const result = sum(args);

console.log('total:',result);