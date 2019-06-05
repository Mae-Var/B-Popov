// Complete the repeatedString function below.
// function repeatedString(s, n) {
//   let lettersArray = s.split('');
//   let tempArrayByN = lettersArray.join('').repeat(n);

//   // const index = n % lettersArray.length;

//   console.log(tempArrayByN);
// }

const repeatedString = (s, n) => {
  let repetions = Math.floor(n / s.length); // we're getting how many times our "string" is repeated in the N variable (in thgat case it's 3 times)
  let remainder = n % s.length; // we're getting the remainder i.e. what's left - in that case it's 1 (10 / 3 = 3 + 1 remainder);
  let count = (s.split('a').length - 1) * repetions; // not really sure... ;D
  for (let i = 0; i < remainder; i++) {
    if (s.charAt(i) === 'a') count++;
  }
  console.log(count);
};

const s = 'aba';
const n = 10;
let result = repeatedString(s, n);

//
// Some experiments below ;/// TT_TT
//
// const asdf = 'aba';
// const dfs = Array(10);
// console.log(dfs.fill(asdf.split('')));

// FASTEST WAY to create an empty Array of N-values, you can assing a new variable named N. If the value of N is 10, this will give create an Array with 10 empty values.
// arr = Array(n);
// console.log(arr);
