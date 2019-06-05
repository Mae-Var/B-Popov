const arr1 = [1, 5, 6, 7, 5, 6, 5, 56, 11, 78, 9789, 8679, 7, 10];
const arr2 = [1, 5, 6, 7, 8, 5, 6, 7, 8, 10, 11, 78];

function compare(arr1, arr2) {
  const objMap = {};

  arr1.forEach(e1 =>
    arr2.forEach(e2 => {
      if (e1 === e2) {
        objMap[e1] = objMap[e1] + 1 || 1;
      }
    })
  );
  console.log(Object.keys(objMap).map(e => Number(e)));
}

// Or you can use the below - again, it's removing duplicates:

function compare1(arr1, arr2) {
  if (!arr1 || !arr2) return;

  let result;

  arr1.forEach((e1, i) =>
    arr2.forEach(e2 => {
      if (e1.length > 1 && e2.length) {
        result = compare1(e1, e2);
      } else if (e1 !== e2) {
        result = false;
      } else {
        result = true;
      }
    })
  );

  return result;
}
compare1([1, 2, 3], [1, 2, 3]);
// true
compare1([1, 2], [1, 2, 3]);
//false
