// Challenge 5: Sum of Numbers
// Write a function to find the sum of all numbers in the array.
// Usage examples:
// console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
// console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
// console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15


// function sumNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sum += arr [i];
//       }
//     return sum;
// }
// console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
// console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
// console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15



function sumNumbers(array){
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        result = result + array[i]  
    }
    return result
}
console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumNumbers([10, 20, 30, 40, 50])); // 150
console.log(sumNumbers([-1, -2, -3, -4, -5])); // -15