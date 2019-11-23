const isPalindrome = input => {
  if (
    input.toLowerCase() ===
    input
      .toLowerCase()
      .split('')
      .reverse()
      .join('')
  ) {
    return 'The input is Palindrome.';
  } else {
    return 'The input is not a Palindrome.';
  }
};

console.log(isPalindrome('Madam'));

// ANOTHER SOLUTION TO THE PALINDROME EXERCISE:

function pali(string) {
  let strLeng = Math.floor(string.length / 2);
  string = string.toLowerCase();

  for (let i = 0; i < strLeng; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
}

console.log(pali('xeMadamEX'));
