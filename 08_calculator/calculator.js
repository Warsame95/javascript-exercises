const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(nums) {
	return nums.reduce((total,next) => {return total + next;
  },0);
  

};

const multiply = function(nums) {
  return nums.reduce((total,next) => {return total * next;
  },1);
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
