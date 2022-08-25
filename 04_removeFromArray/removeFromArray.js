const removeFromArray = function() {
    let lst = arguments[0];
    for(let i = 1; i <= arguments.length - 1; i++){
        let index = lst.indexOf((arguments[i]));
        if(index >= 0){
            
            lst.splice(index,1);
        }
    }

    return lst;
};

// Do not edit below this line
module.exports = removeFromArray;
