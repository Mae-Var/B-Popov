let stringInput1 = 'I am using HackerRank to improve programming';
let stringInput2 = 'am HackerRank to improve';

function missingWords(s, t) {
  let mainString = s.split(' ');
  let subString = t.split(' ');
  let foundWords = [];
  let position = 0;

  for (let i = 0; i < subString.length; i++) {
    let foundPosition = -1;
    for (let j = position; j < mainString.length; j++) {
      if (subString[i] === mainString[j]) {
        foundPosition = j;
        break;
      }
    }

    if (foundPosition !== -1) {
      foundWords.push(subString[i]);
      position = i;
    }
  }

  let missingWords = [];

  for (let i = 0; i < mainString.length; i++) {
    if (foundWords.includes(mainString[i])) {
      foundWords.splice(mainString[i], 1);
      continue;
    }
    missingWords.push(mainString[i]);
  }

  return missingWords;
}

console.log(missingWords(stringInput1, stringInput2));
