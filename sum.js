// Write a node program that takes in an unlimited number
// of command line arguments, goes through each and prints
// out the sum of them. If any argument is not a whole number,
// skip it. Do support negative numbers though. If any argument
// is not a number, output an error message. We need at least 2 arguments.


// take in an unlimited number of command line arguments
const args = process.argv.slice(2);


// console.log(args);
// We need at least 2 arguments.
if (args.length < 2) {
  // print error message
  console.log("Please provide at least 2 arguments");
  // stop the excution of the js
  // return;
  process.exit(1);
}


// goe through each number 

let total=0;

for (let i=0; i < args.length; i ++) {
  // Add each number to an accumulator
  // console.log("index:", i, "value", args[i]);

  // Convert the args to numbers
  const nb = Number(args[i]);

  console.log("NB:", nb);

  // If any argument is not a number, output an error message.
  if (isNaN(nb)) {
    console.log('Please provide only numbers');
    process.exit(1);
  } 


  // If any argument is not a whole number, skip it
  // if it is a whole nb, add it, otherwise do nothing
  if (nb % 1 === 0) {
    total += nb;
  }
}








// print out the sum of them.
console.log(total);