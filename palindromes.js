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

console.log(isPalindrome('Madamx'));
