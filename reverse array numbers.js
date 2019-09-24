let arrayOriginal = [1, 2, 3, 10, 5, 6, 7];

// Solution (v1)

// let newArray = arrayOriginal.slice();

// const reverseArr = revNao => {
//   console.log(revNao.reverse());
// };

// console.log(newArray);
// reverseArr(arrayOriginal);

// Hard way below, coz Zah's needy :D

// Solution (v2) - just a reversal.

const a2Reverse = revThis => {
  let i = 0;
  let j = revThis.length - 1;
  while (i < j) {
    let temp = revThis[i];
    revThis[i] = revThis[j];
    revThis[j] = temp;
    i++;
    j--;
  }
  return revThis;
};

console.log(a2Reverse(arrayOriginal));

// Solution (v3) by size!

const a3Reverse = inputArr => {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = 0; j < inputArr.length - 1; j++) {
      if (inputArr[j] < inputArr[i]) {
        let temp = inputArr[i];
        inputArr[i] = inputArr[j];
        inputArr[j] = temp;
      }
    }
  }
  return inputArr;
};

console.log(a3Reverse(arrayOriginal));
