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
    const removedDuplicate = removeDuplicate(combinedArray)

    return removedDuplicate.sort((a,b) => a - b)

}

console.log(mergeArrays([3,7,2,8], [2,4,1,10]))


function removeDuplicate (arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        let found = false
        if (result.length === 0) {
            result.push(arr[i])
        } else {
            for (let j = 0; j < result.length; j++) {
                if (arr[i] === result[j]) {
                    found = true;
                    break;
                } 
            }

            if (!found) {
                result.push(arr[i])
                found = false
            }
        }
    }

    return result
}
