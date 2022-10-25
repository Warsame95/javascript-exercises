const palindromes = function (str) {
    let reverse = str.replaceAll(",","").replaceAll("!","").replaceAll(".","").replaceAll(" ","").toLowerCase().split("").reverse().join("");
    console.log(reverse);
    return reverse == str.replaceAll(",","").replaceAll("!","").replaceAll(".","").replaceAll(" ","").toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
