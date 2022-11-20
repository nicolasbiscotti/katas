function mdSumArray(array) {
  let sum = 0;
  for (const term of array) {
    if (typeof term === "object") {
      sum += mdSumArray(term);
    } else {
      sum += term;
    }
  }
  return sum;
}
module.exports = mdSumArray;
