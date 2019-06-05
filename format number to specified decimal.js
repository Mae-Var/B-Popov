/*
function financial(x) {
  return Number.parseFloat(x).toFixed(2);
} */

const decimals = (num1, num2) => {
  return Number.parseFloat(num1).toFixed(num2);
};

console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));

// "2.10"
// "2.100"
// "2100.00"
