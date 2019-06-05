let is_Numeric = num => {
  if (typeof parseInt(Number(num)) !== 'number') return false;
  return (
    !isNaN(num) && parseInt(Number(num)) == num && !isNaN(parseInt(num, 10))
  );
};

console.log(is_Numeric(12)); 
console.log(is_Numeric('abcd')); 
console.log(is_Numeric('12')); 
console.log(is_Numeric(' ')); 
console.log(is_Numeric(1.20)); 
console.log(is_Numeric(-200));
// Output :
// true 
// false 
// true 
// false 
// true 
// true