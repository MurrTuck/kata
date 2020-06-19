//Given an array of integers your solution should find the smallest integer.

//For example:

//Given[34, 15, 88, 2] your solution will return 2
//Given[34, -345, -1, 100] your solution will return -345
//You can assume, for the purpose of this kata, that the supplied array will not be empty.

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript


findSmallestInt = (args) => {
    return Math.min.apply(Math, args)
}


const smallInteger = findSmallestInt([34, -345, -1, 100])

// console.log(smallInteger)


const smallest = (arr) => {
    return arr.sort((a, b) => a - b)[0]
}

const newArr = smallest([34, 15, 88, 2])

// console.log(newArr)
