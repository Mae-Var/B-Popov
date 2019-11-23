var x = 0.3 - 0.2; // 30 cents minus 20 cents
var y = 0.2 - 0.1; // 20 cents minus 10 cents

console.log(x == y); // => false: the two values are not the same!
console.log(x == 0.1); // => false: .3-.2 is not equal to .1
console.log(y == 0.1); // => true: .2-.1 is equal to .1
