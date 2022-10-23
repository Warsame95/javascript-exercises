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

const power = function(num, power) {
  let ans = num;
	for(let i = 1; i<power; i++){
    ans*=num;
  }
  return ans
};

const factorial = function(n) {
	if(n == 0){
    return 1;
  }
  else if(n == 1){
    return n;
  }
  else{
    return n*factorial(n-1);
  }
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
