let max = numArray => {
  return Math.max.apply(null, numArray);
};

console.log(max([12, 34, 56, 1]));
console.log(max([-12, -34, 0, -56, -1]));
// 56
// 0

// function getMaxOfArray(numArray) {
//   return Math.max.apply(null, numArray);         <--- This should only be used for arrays with relatively few elements.
// }

// var arr = [1, 2, 3];
// var max = arr.reduce(function(a, b) {            <--- Array.reduce() can be used to find the maximum element in a numeric array, by comparing each value:
//   return Math.max(a, b);
// });


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max