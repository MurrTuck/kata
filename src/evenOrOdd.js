//Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// https://www.codewars.com/kata/even-or-odd/train/javascript

function even_or_odd(number) {
    if (number % 2 === 0) {
        return 'Even'
    } else {
        return 'Odd'
    }
}
// console.log(even_or_odd(22))

//Anoter Way ->

function even_or_odd1(n) {
    return n % 2 ? "Odd" : "Even"
}
// console.log(even_or_odd1(17))


