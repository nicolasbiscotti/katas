function hasBalancedBrackets(brackets) {
  const openingBrackets = [];
  const isOpening = {
    "(": true,
    "[": true,
    "{": true,
  };
  const closing = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let bracketsLength = brackets.length;
  let noBadClosing = true;
  let index = 0;

  while (index < bracketsLength && noBadClosing) {
    const currentChar = brackets[index];
    if (isOpening[currentChar]) {
      openingBrackets.push(currentChar);
    } else if (closing[currentChar] !== undefined) {
      const lastOpening = openingBrackets[openingBrackets.length - 1];
      if (lastOpening === closing[currentChar]) {
        openingBrackets.pop();
      } else {
        noBadClosing = false;
      }
    }
    index++;
  }

  return noBadClosing && openingBrackets.length === 0;
}

module.exports = hasBalancedBrackets;
