function maxValue(stocksValues) {
  let minValue = stocksValues[0];
  let maxProfit = -minValue;
  for (let quote = 1; quote < stocksValues.length; quote++) {
    const currentValue = stocksValues[quote];
    const profit = currentValue - minValue;
    maxProfit = Math.max(profit, maxProfit);
    // if currentValue value is less than minValue, then is the new minValue
    minValue = Math.min(currentValue, minValue);
  }
  return maxProfit;
}

module.exports = maxValue;
