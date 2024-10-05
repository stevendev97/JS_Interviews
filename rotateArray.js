// Challenge: Write a JavaScript function named rotateArray that rotates an array to the right
// by a given number of steps. Each step should move the last element of the array to the front.

// Requirements:

// The function should take two arguments: an array arr and a number n 
// which represents the number of times the array should be rotated.

// The function should return the rotated array without modifying the original array.

// For example, rotateArray([1, 2, 3, 4], 2) should return [3, 4, 1, 2].



function rotateArray(arr, n) {
    // Correctly handle negative rotations and rotations larger than the array length
    n = n % arr.length;

    if (n === 0) return arr;

    if (n < 0) n += arr.length

    return [...arr.slice(-n), ...arr.slice(0, arr.length - n)];
}


console.log(rotateArray([1, 2, 3, 4], -2));

