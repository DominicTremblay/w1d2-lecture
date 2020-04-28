// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument
// is not a number, output an error message. We need at least 2 arguments.


// take in an unlimited number of command line arguments
const args = process.argv.slice(2);

// We need at least 2 arguments.

// goe through each number 

for (let i=0; i < args.length; i ++) {
  // Add each number to an accumulator
  console.log("index:", i, "value", args[i]);
}


// If any argument is not a whole number, skip it

// If any argument is not a number, output an error message.



// print out the sum of them.