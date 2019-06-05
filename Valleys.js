// Valleys counter

// Complete the countingValleys function below.

function countingValleys(n, s) {
  let stepsArr = s.split('');
  let altitude = 0;
  let valley = 0;

  for (let i = 0; i < stepsArr.length; i++) {
    if (stepsArr[i] === 'U') {
      altitude++;
    }
    if (stepsArr[i] === 'D') {
      altitude--;
    }
    if (altitude === 0 && stepsArr[i] === 'U') {
      valley++;
    }
  }
  return valley;
}

const n = 10;
const s = 'UDDDUDUUDU';
let result = countingValleys(n, s);

console.log(result);

// const n = 8;
// const s = 'UDDDUDUU';
// let stepsArr = s.split('');
// console.log(stepsArr);

//var arr = input.split('\n');
// var path = arr[1].split('');
