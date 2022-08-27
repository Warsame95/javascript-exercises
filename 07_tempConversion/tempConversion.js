const ftoc = function(fahr) {
  let celcius = (fahr - 32) * (5/9);
  return Math.round(celcius * 10) / 10;
};

const ctof = function(celcius) {
  let fahr = (celcius * (9/5)) + 32;
  return Math.round(fahr * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
