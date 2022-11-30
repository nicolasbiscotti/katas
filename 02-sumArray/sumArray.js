function sumArray(terms, sum) {
  let majorTermIndex = terms.length - 1;
  let pivot = 0;

  while (pivot < majorTermIndex) {
    const acc = terms[majorTermIndex] + terms[pivot];
    if (acc === sum) {
      return true;
    } else if (acc < sum) {
      pivot++;
    } else {
      majorTermIndex--;
    }
  }
  return false;
}

module.exports = sumArray;
