const twoDimensionArr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

// Complete the hourglassSum function below.

function hourglassSum(arr) {
  let patternArr = [[1, 1, 1],[0, 1, 0],[1, 1, 1]]; //Pattern Array, read more on that on Google.

}

function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(' ')
      .map(arrTemp => parseInt(arrTemp, 10));
  }
  let result = hourglassSum(arr);
}

