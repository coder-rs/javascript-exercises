const convertToCelsius = function(f) {
  f = parseFloat(f);
  return Number(((f-32) * 5 / 9 ).toFixed(1));
};

const convertToFahrenheit = function(c) {
  c = parseFloat(c);
  return Number(((9 * c) / 5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
