let array1 = [1, 2, 3, 4, 5];

function findNumber(arr, k) {
  for (let i = 0; i <= arr.length; i++)
    if (k === arr[i]) {
      return 'YES';
    }
  return 'NO';
}

console.log(findNumber(array1, 5));

// remove odd numbers:

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const deleteOddNumbers = inputNumbers => {
  for (let i = 0; i < inputNumbers.length; i++) {
    if (inputNumbers[i] % 2 === 0) {
      inputNumbers.splice(i, 1);
    }
  }
  return console.log(inputNumbers);
};

deleteOddNumbers(array2);
