const findMax = (arr) => {
    if (arr.length === 0) {
        return null
    }

    let max = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    return max
}

console.log(findMax([100,3,12,6,8,10,6,2]))