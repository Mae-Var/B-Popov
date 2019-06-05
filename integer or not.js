let is_Int = num => {
  if (typeof num !== 'number') return false;
  return (
    !isNaN(num) && parseInt(Number(num)) == num && !isNaN(parseInt(num, 10))
  );
};

// let is_Int = num1 => {
//  return Number.isInteger(num1);
// };

console.log(is_Int(23));
console.log(is_Int(4e2));
console.log(is_Int(NaN));
console.log(is_Int(23.75));
console.log(is_Int(-23));
// Output :
// true
// true
// false
// false
// true
