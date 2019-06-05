let initialString = 'asd';
let search = 'a';
let x = 11;

const countOccurences = (initialString, search, x) => {
  let initialStringOccurences = 0; // === 1
  for (let i = 0; i < initialString.length; i++) {
    let letter = initialString[i];

    if (letter === search) {
      initialStringOccurences++;
    }
  }

  let repetions = Math.floor(x / initialString.length); // == 3
  let remainder = x % initialString.length; // == 2

  let occurences = repetions * initialStringOccurences;

  for (let i = 0; i < remainder; i++) {
    if (initialString[i] === search) {
      occurences++;
    }
  }

  return console.log(occurences);
};

countOccurences(initialString, search, x);
