const removeFromArray = function() {
    let toRemove = [...arguments].slice(1)
    let arr = arguments[0]
    
    for (let char of toRemove) {
        arr = arr.filter(rem => rem !== char)
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
