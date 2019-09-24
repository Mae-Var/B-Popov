let friendOrFoe = [
  'Jimm',
  'Cari',
  'Ryan',
  'Jimmy',
  'Kieran',
  'Mark',
  'aret',
  'truehdnviegkwgvke',
  'sixtyiscooooool'
];
// Friends are consideret names of exactly 4 letters length.

function friend(friends) {
  let tempArray = friends;

  const result = tempArray.filter(name => name.length === 4);
  return result;
}

console.log(friend(friendOrFoe));
