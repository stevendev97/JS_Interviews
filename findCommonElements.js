const findCommonElement = (arr1, arr2) => {
    let result = []
    const hashSet = new Set(arr1)

    for (let i = 0; i < arr2.length; i++) {
        if (hashSet.has(arr2[i])) {
            result.push(arr2[i])
        }
    }


    return result
}

console.log(findCommonElement([1,2,3], [3,4,5,1,1,1]))