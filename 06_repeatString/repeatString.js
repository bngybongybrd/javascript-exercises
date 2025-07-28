const repeatString = function(str, count) {
    res = ""
    if (count < 0) {
        return "ERROR"
    }

    for (let i = 0; i < count; i++) {
        res += str
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
