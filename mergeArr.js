const bubbleSort = (arr) => {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1]
                arr[i + 1] = arr[i]
                arr[i] = temp
                swapped = true
            }
        }

    } while (swapped)

}

const mergeArr = (arr1, arr2) => {

    const result = [...arr1, ...arr2]
    bubbleSort(result)

    return result

}

console.log(mergeArr([1,3,5],[2,4,6]))
