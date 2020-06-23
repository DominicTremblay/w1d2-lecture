// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// takes in an unlimited number of command line arguments

// Extract the command line arguments
// splice or slice
const args = process.argv.slice(2);
console.log(args);

// We need at least 2 arguments.

// we need an accumulator
let total = 0;

// goes through each


//  if you're confortable with the for of
// for (let arg of args) {

// }

for (let i = 0; i < args.length; i++) {

  // console.log("index:",i, "number:", args[i], "type:", typeof args[i]);
  // add each number
  // convert the arguments to number
  total += Number(args[i]);
  // total = total + args[i]

  console.log("total:", total);

}

// If any argument is not a whole number, skip it
// Do support negative numbers though.
// If any argument is not a number, output an error message.


// print the sum

