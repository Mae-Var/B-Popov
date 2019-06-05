/* 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object: */

let student = {
  name: 'David Rayy',
  sclass: 'VI',
  rollno: 12
};

console.log(student);

function deleteProperty(object, objectProperty) {
  delete object[objectProperty];
}

deleteProperty(student, 'rollno');
console.log(student);



student.name = ['David Rayy', 'Boyan'];
console.log(student);

