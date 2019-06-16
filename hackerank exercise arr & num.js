let arr1 = [1, 2, 3, 4, 5];
let k1 = 3;

function findNumber(arr, k) {
  let ans1 = "YES";
  let ans2 = "NO";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return ans1;
    }
  }
  return ans2;
}

findNumber(arr1, k1);