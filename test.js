// const arr1 = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]];

// console.log(arr1[0][3]);

/*
let asdf = lalal => {
  let a = 3;
  let b = 3;
  let c = 4;
  if (a === b && b === c) {
    console.log(`A, B & C are equal and their number value is: ${b}`);
  }
  if (a === b || b === c) {
    console.log(`B & C are equal and their number value is: ${b}`);
  }
};

console.log(asdf());

*/

let arr1 = [5, 3, 4, 6, 78, 21, 23, 93, 21, 36, 9213, 21, 5123, 213, 562];
a = arr1.length - 1;

for (i = 0; i < a; i++) {
  for (j = i + 1; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      console.log(`${arr1[i]} and ${arr1[j]} in the array are equal.`);
    }
  }
}
