const convertToCelsius = function(temp) {
  degf = ((temp - 32) * 5 / 9).toFixed(1)
  return +degf
};

const convertToFahrenheit = function(temp) {
  degc = (temp * 9 / 5 + 32).toFixed(1)
  return +degc
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
