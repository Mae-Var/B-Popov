let s = 'asd';
let n = 11;

const countOccurences = (s, n) => {
  let sOccurences = 0; // === 1
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];

    if (letter === 'a') {
      sOccurences++;
    }
  }

  let repetions = Math.floor(n / s.length); // == 3
  let remainder = n % s.length; // == 2

  let occurences = repetions * sOccurences;

  for (let i = 0; i < remainder; i++) {
    if (s[i] === 'a') {
      occurences++;
    }
  }

  return console.log(occurences);
};

countOccurences(s, n);
