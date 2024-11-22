const twoSum = (arr, n) => {
    const hashMap = {}

    for (let i = 0; i < arr.length; i++) {
        if ((n - arr[i]) in hashMap) {
            return [hashMap[n - arr[i]], i]
        }

        hashMap[arr[i]] = i
    }
}