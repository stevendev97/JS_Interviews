// Challenge: Write a JavaScript function named mergeArrays that takes two arrays of integers 
// and returns a new array containing the elements of both arrays in ascending order 
// without any duplicates.

// Requirements:

// The function should take two arrays as arguments.
// The resulting array should be sorted in ascending order.
// The resulting array should not contain any duplicates.
// For example, mergeArrays([1, 3, 5], [2, 3, 6]) should return [1, 2, 3, 5, 6].


const mergeArrays = (arr1, arr2) => {

    const combinedArray = [...arr1, ...arr2];
    const uniqueArray = Array.from(new Set(combinedArray));

    return uniqueArray.sort((a, b) => a - b);

}

console.log(mergeArrays([3,7,2,8], [2,4,1,10]))