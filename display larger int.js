// Write a JavaScript program that accept two integers and display the larger.

let largerInt = (num1, num2) => {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'Please, make sure that both inputs are numbers.';
  } else {
    if (num1 === num2) {
      return `Both numbers (${num1} = ${num2}) are equal.`;
    }
    if (num1 > num2) {
      return `Undisputed winner in this situation is the number: ${num1}`;
    }
    return `Undisputed winner in this situation is the number: ${num2}`;
  }
};

console.log(largerInt(-13, 1));

// W3Schools solution:

// var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");

// if(parseInt(num1, 10) > parseInt(num2, 10))
//   {
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10))
//   {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }
