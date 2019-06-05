let arrayA = [1, 2, 3, 4, 5];
let repeatD = 4; // input should be: [5, 4];

// Complete the rotLeft function below.

function rotLeft(a, d) {
  let tempArr = [];

  for (i = 0; i < a.length; i++) {
    let newIndx = (i + d) % a.length;  // calling position "i", which is at [0] + the number (4 in this case) of left-position rotations (repeatD). Then you take the remainder of that & lenght of the Array.
    tempArr[i] = a[newIndx];        // Then get the new position of arrayA[i] after the rotation.
  }
  return console.log(tempArr);
}

rotLeft(arrayA, repeatD);

// maybe add another for loop that states that if j <= repeatD, it should proceed with the loop and once it's equal to repeatD integer, it should stop it.
// it's possible that you should add the if statement within this for loop. You need only X elements to be moved, where X is === repeatD.
