const numbersCheck = input => {
  for (let i = 1; i <= input; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
      continue;
    }
    if (i % 3 === 0) {
      console.log('Fizz');
      continue;
    }
    if (i % 5 === 0) {
      console.log('Buzz');
      continue;
    } else {
      console.log(i);
    }
  }
};

numbersCheck(15);
