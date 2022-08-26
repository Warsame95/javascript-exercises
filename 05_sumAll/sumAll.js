const sumAll = function(start, end) {
    let total = 0;
    let max;
    let min;
    if (typeof start != 'number' || typeof end != 'number'){
        return "ERROR";
     }

     if (start < 0 || end < 0){
        return "ERROR";
     }

     if (start > end){
        min = end;
        max = start;
     }
     else{
        min = start;
        max = end;
     }

    for (let i = min; i <= max; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
