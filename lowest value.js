let min = numArray => {
  return Math.min.apply(null, numArray);
};

console.log(min([12, 34, 56, 1]));
console.log(min([-12, -34, 0, -56, -1]));
// 1
// -56
