const factorial = input => {
  let p = 1;
  for (let i = 2; i <= input; i++) {
    p *= i;
  }
  return p;
};

console.log(factorial(5));
