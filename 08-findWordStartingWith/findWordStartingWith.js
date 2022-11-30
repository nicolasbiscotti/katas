function findWordStartingWith({ text }, string) {
  const result = [];
  const words = text.split(" ");

  string = string.toLowerCase();

  let index = 0;
  for (const word of words) {
    const wordStart = word.slice(0, string.length).toLowerCase();
    if (wordStart === string) {
      result.push(index);
    }
    index += word.length + 1;
  }

  return result;
}
module.exports = findWordStartingWith;
