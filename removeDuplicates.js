const removeDuplicate = (arr) => {
    const hashMap = {}

    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in hashMap)) {
            hashMap[arr[i]] = 1
        }
    }

    return Object.keys(hashMap);
}

console.log(removeDuplicate([1, 2, 3, 2, 4, 3]))

const removeDuplicateV2 = (arr) => [...new Set(arr)]

console.log(removeDuplicateV2([1, 2, 3, 2, 4, 3]))
