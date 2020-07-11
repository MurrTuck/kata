// Kata can be found here: https://www.codewars.com/kata/56b7f2f3f18876033f000307/train/javascript

//Are the numbers in order?
// In this Kata, your function receives an array of integers as input.Your task is to determine whether the numbers are in ascending order.An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.

// For the purposes of this Kata, you may assume that all inputs are valid, i.e.non - empty arrays containing only integers.

// Note that an array of 1 integer is automatically considered to be sorted in ascending order since all(zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.An empty list is considered a degenerate case and therefore will not be tested in this Kata - feel free to raise an Issue if you see such a list being tested.


function inAscOrder(arr) {
    // Code your algorithm here :)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1])
            return false
    }
    return true
}



const newArr2 = inAscOrder([3, 6, 2, 55, 66, 777, 7, 5, 1, 9, 20, 31, 44])
const newArr3 = inAscOrder([1, 2, 3, 4, 5, 6, 7, 8, 9])
const newArr4 = inAscOrder([1, 22, 33, 44, 55, 66, 77, 88, 99])
const newArr5 = inAscOrder([99, 88, 77, 66, 55, 44, 33, 22, 1])

console.log(newArr2)
console.log(newArr3)
console.log(newArr4)
console.log(newArr5)