let arr1 = [9000, 1, 2, 3, 4, 5, 67, 7, 12, 31, 2321, 543, 654, 6534, 423];

function highestNum(inputarr) {
  let temp = 0;
  for (let i = 0; i < inputarr.length - 1; i++) {
    temp = inputarr[0];
    if (temp < inputarr[i++]) {
      temp = inputarr[i++];
    }
  }
  return temp;
}

console.log(highestNum(arr1));
