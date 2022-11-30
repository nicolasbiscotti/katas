function hasBalancedBrackets(brackets) {
  const validBrackets = { "(": ")", "{": "}", "[": "]" };
  const traker = [];

  for (const bracket of brackets) {
    if (isAnOpeningBracket(bracket, validBrackets)) {
      traker.push(bracket);
    } else if (canClose(bracket, traker.at(-1), validBrackets)) {
      traker.pop();
    } else {
      return false;
    }
  }

  return traker.length === 0;
}

function isAnOpeningBracket(bracket, openingBracketList) {
  return openingBracketList[bracket] !== undefined;
}

function canClose(closingBracket, openingBracket, validBrackets) {
  const isNothingToClose = openingBracket === undefined;
  if (isNothingToClose) {
    return false;
  } else {
    return validBrackets[openingBracket] === closingBracket;
  }
}

module.exports = hasBalancedBrackets;
