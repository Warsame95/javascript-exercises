const findTheOldest = function(people) {
    const date = new Date();

    


    const oldest = people.map(function(person){
        if (person.yearOfDeath == undefined){
            person.yearOfDeath = date.getFullYear();
        }
        return person;
    }).sort(function(a,b){
        if (a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth){
            return 1
        }
        else{
            return -1;
        }
    }).at(0);
    console.log(oldest);
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
