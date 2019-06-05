/*Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
Sample object: */

let student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12
};

console.log(student);

// First solution below:

let keys = Object.keys(student);
console.log(keys.join(','));

// Second solution below:

console.log(Object.getOwnPropertyNames(student).join(','));

// Third solution below:

console.log(Object.keys(student).join(','));
