let arr = [5, 3, 4, 6, 78, 21, 23, 93, 21, 36, 9213, 289, 5123, 213, 562];

console.log(arr);

/*
let bubbleSort = inputArr => {
  let len = inputArr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (inputArr[j] > inputArr[j + 1]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
};

console.log(bubbleSort); */

for (i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
  for (j = 0; j < arr.length; j++) {
    if (arr[i] <= arr[j]) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}

console.log(arr);