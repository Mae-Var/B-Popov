let l = 3;
let r = 9;

function oddNumbers(l, r) {
  let stefokal = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 !== 0) {
      stefokal.push(i);
    }
  }
  return stefokal;
}

console.log(oddNumbers(l, r));
