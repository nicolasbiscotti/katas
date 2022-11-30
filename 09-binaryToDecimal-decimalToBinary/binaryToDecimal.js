function binaryToDecimal(binaryString) {
  const length = binaryString.length;
  let number = 0;
  for (let power = 0, index = length - 1; index >= 0; index--, power++) {
    number += Number(binaryString[index]) * 2 ** power;
  }
  return number;
}

function decimalToBinary(decimalNumber) {
  let binaryString = "";
  do {
    let remainder = decimalNumber % 2;
    binaryString = remainder + binaryString;
    decimalNumber = Math.floor(decimalNumber / 2);
  } while (decimalNumber > 0);
  return binaryString;
}

module.exports = { binaryToDecimal, decimalToBinary };
