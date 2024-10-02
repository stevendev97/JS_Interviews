// Challenge: Write a JavaScript function named flattenArray that takes a nested array 
// (arrays within arrays) and returns a new array with all the elements flattened into a single level.

// For example:

// flattenArray([1, [2, [3, [4]], 5]]) should return [1, 2, 3, 4, 5].
// flattenArray([[1, 2], [3, 4], 5]) should return [1, 2, 3, 4, 5].
// Requirements:

// You cannot use Array.prototype.flat() (to make it more challenging).
// The function should work for arrays nested at any level.


const flattenArray = (arr) => {
    let result = []

    const falttenInnerArr = (innerArr) => {

        innerArr.forEach(item => {
            if (Array.isArray(item)) {
                falttenInnerArr(item)
            } else {
                result.push(item)
            }
        })

    }

    falttenInnerArr(arr)
    return result
}

console.log(flattenArray([1, [2, [3, [4]], 5]]))