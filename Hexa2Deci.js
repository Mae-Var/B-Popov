let hexaNum = 0xc0ffe;
let deciNum = 1133377;

//Convert a number to a hexadecimal string with:
//hexString = yourNumber.toString(16);

//And reverse the process with:
//yourNumber = parseInt(hexString, 16);

console.log(parseInt(hexaNum, 16));
console.log(deciNum.toString(16));

console.log(2 / -0); //negative infinity
console.log(-2 / 0); //negative infinity
console.log(2 / 0); //positive infinity
