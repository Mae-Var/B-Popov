let stringInput = 'It is a pleasant day today';

function longestEvenWord(sentence) {
  // Write your code here
  let senteceToArr = sentence.split(' ');
  let longestWord = 'f';

  for (let i = 0; i < senteceToArr.length; i++) {
    if (
      senteceToArr[i].length > longestWord.length &&
      senteceToArr[i].length % 2 === 0
    ) {
      longestWord = senteceToArr[i];
    }
  }

  if (longestWord.length >= 2) {
    return longestWord;
  }
  return '00';
}

console.log(longestEvenWord(stringInput));
