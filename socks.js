// Complete the sockMerchant function below.

function sockMerchant(n, ar) {
  let matchingScks = 0;
  let matchingArr = [];

  for (let i = 0; i < ar.length; i++) {
    if (!matchingArr.includes(ar[i])) {
      matchingArr.push(ar[i]);
    } else {
      matchingScks++;
      remArrElement(matchingArr, ar[i]);
    }
  }
  return matchingScks;
}

const remArrElement = (array, element) => {
  const index = array.indexOf(element);
  array.splice(index, 1);
};

//function main() {
// const n = parseInt(readLine(), 10);
const n = 8;
//   const ar = readLine()
//     .split(' ')
//     .map(arTemp => parseInt(arTemp, 10));
const ar = [1, 1, 2, 3, 2, 4, 3, 5, 3];

let result = sockMerchant(n, ar);
console.log(result);
//}

// object.key = ['valu1', 'value2'];

// You can just define an array for the property:

// var obj = {key1: ["val1", "val2", "val3"], key2: "value2"};
// Or, assign it after the fact:

// var obj = {key2: "value2"};
// obj.key1 = ["val1", "val2", "val3"];
