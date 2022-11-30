function findNeedle(needle) {
  function inHaystack(haystack) {
    let result = -1;

    let index = 0;
    while (index <= haystack.length - needle.length) {
      if (isItOnIndex(index, needle, haystack)) {
        return index;
      }
      index++;
    }

    return result;
  }

  function isItOnIndex(index, needle, haystack) {
    return needle === haystack.slice(index, needle.length + index);
  }

  return {
    inHaystack,
  };
}

module.exports = findNeedle;
