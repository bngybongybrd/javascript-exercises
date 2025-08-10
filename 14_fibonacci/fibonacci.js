const fibonacci = function(num) {
    let res = 1
    let a = 1
    let b = 0
    
    if (num < 0) {
        return "OOPS"
    } else if (num == 0) {
        return 0
    } else if (num == 1 || num == 2) {
        return 1
    }

    for (let i = 0; i < num-2; i++) {
        b = a
        a = res
        res = a + b
        // console.log(res)
    }
    return res
};

// console.log(fibonacci(4))
// console.log(fibonacci(6))
// 1, 1, 2, 3, 5, 8, 

// Do not edit below this line
module.exports = fibonacci;
