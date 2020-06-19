// Write a function called repeatString which repeats the given String src exactly count times.

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr(n, s) {
    var str = s
    return str.repeat(n);
}

const newString = repeatStr(17, 'ForestGump')

console.log(newString)