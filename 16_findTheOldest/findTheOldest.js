const findTheOldest = function(arr) {
    let res = arr
        .reduce((acc, person) => {
            let now = new Date()
            let age
            if (!("yearOfDeath" in person)) {
                age = now.getFullYear() - person.yearOfBirth 
            } else {
                age = person.yearOfDeath - person.yearOfBirth
            }
            acc.push({
                name: person.name,
                age: age
            })
            return acc
        }, [])
        .reduce((max, cur) => {
            return max.age > cur.age ? max : cur
        })

    return res
};

const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

// console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;