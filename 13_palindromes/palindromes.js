const palindromes = function (str) {
    let arr = [...str]
        .filter(chr => /^[a-z0-9]+$/i.test(chr))
        .map(s => s.toLowerCase())
    let revarr = arr.slice().reverse()
    let palindrome = true
    for (let i in revarr) {
        if (arr[i] != revarr[i]) {
            palindrome = false
            break
        }
    }
    return palindrome
};

console.log(palindromes("rac3e3car"))

// Do not edit below this line
module.exports = palindromes;