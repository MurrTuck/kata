// Write a function called repeatString which repeats the given String src exactly count times.

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

repeatStr = (n, s) => {
    var str = s
    return str.repeat(n);
}

const newString = repeatStr(17, 'Forest Gump ')

console.log(newString)


// classmates code

// function repeatStr2(num, str) {
//     let string = str
//     for (let i = num; i > 1; i--) {
//         string += str
//     }
//     return string
// }

// const newString2 = repeatStr2(4, 'Pig')

// console.log(newString2)