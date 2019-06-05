const rating = [5, 3, 5, 4, 1, 1, 4];

const getAverageRating = array => {
  // something's not quite right... ;]
  let ratingSum = array.reduce(
    (accumulatedSum, ratingIndex) => accumulatedSum + ratingIndex,
    0
  );
  return (ratingSum / array.length).toFixed(2);
};

console.log(getAverageRating(rating));