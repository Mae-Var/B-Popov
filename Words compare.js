let word1 = 'salvation';
let word2 = 'damnation';

const compareWords = (a, b) => {
  let w1 = a.length;
  let w2 = b.length;
  console.log(`The 1st word is '${a}' and it has ${w1} letters in it.`);
  console.log(`The 2nd word is '${b}' and it has ${w2} letters in it.`);
  if (w1 !== w2) {
    return console.log(`There's a difference of ${Math.abs(w1 - w2)} letter(s).`);
  } else {
    return console.log('Both words are equally long.');
  }
};

compareWords(word1, word2);
