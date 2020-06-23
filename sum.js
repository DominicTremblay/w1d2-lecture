// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments

// Extract the command line arguments
// splice or slice
const args = process.argv.slice(2);
// console.log(args);
// We need at least 2 arguments. ouput an error msg
if (args.length < 2) {
  console.log('Please provide at least 2 arguments!');
  process.exit(1);
}

const sum = function (numbers) {
  // we need an accumulator
  let total = 0;

  // goes through each

  //  if you're confortable with the for of
  // for (let arg of args) {

  // }

  for (let i = 0; i < args.length; i++) {
    // add each number
    const number = Number(args[i]);
    // console.log("index:",i, "number:", number, "type:", typeof number);
    // convert the arguments to number
    // If any argument is not a number, output an error message.
    if (isNaN(number)) {
      console.log('please provide all numbers');
      process.exit(1);
    }

    // If any argument is not a whole number, skip it
    if (number % 1 === 0) {
      total += number;
      // total = total + args[i]
    }
  }
  // print the sum

  console.log('total:', total);
};

sum(args);
