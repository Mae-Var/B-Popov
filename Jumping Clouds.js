// Complete the jumpingOnClouds function below.

function jumpingOnClouds(inputArr) {
  // arr = Array.from({ length: c }, () => Math.floor(Math.random() * 2));
  //console.log(arr);
  let jumpCount = 0;

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === 0 && inputArr[i + 1] === 0) {
      i++;
      jumpCount++;
    }
    if (inputArr[i] === 0 && inputArr[i + 1] !== 0) {
      i++;
      jumpCount++;
    }
  }
  jumpCount--;
  return jumpCount;
}

const inputArr = [0, 0, 0, 1, 0, 0];

let result = jumpingOnClouds(inputArr);
console.log(result);


// yourArrayHere = Array.from({length: 40}, () => Math.floor(Math.random() * 40));  <--- This generates an array with 40 random numbers as values
