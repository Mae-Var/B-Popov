let dna = 'AACBGATT';

function DNAStrand(dna) {
  let tempInput = dna.split('');

  for (let i = 0; i < dna.length; i++) {
    tempChar = dna[i];

    switch (tempInput[i]) {
      case ' ':
        break;
      case 'A':
        tempInput[i] = 'T';
        break;
      case 'T':
        tempInput[i] = 'A';
        break;
      case 'C':
        tempInput[i] = 'G';
        break;
      case 'G':
        tempInput[i] = 'C';
        break;
    }
  }
  return tempInput.join('');
}

console.log(DNAStrand(dna));

// BEST RESULT:

function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c];
  });
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
};
