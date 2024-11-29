const checkAnagram = (str1, str2) => {

    if (str1.length !== str2.length) return false;
    
    const obj1 = {}

    for (const char of str1) {
        if (obj1[char]) {
            obj1[char] += 1
        } else {
            obj1[char] = 1
        }
    }

    for (const char of str2) {
        if (obj1[char]) {
            obj1[char] -= 1
        } else {
            return false
        }
    }

    return true


    // let obj1 = {}
    // let obj2 = {}

    // for (const char of srt1) {
    //     if (char in obj1) {
    //         obj1[char] += 1
    //     } else {
    //         obj1[char] = 1
    //     }
    // }

    // for (const char of str2) {
    //     if (char in obj2) {
    //         obj2[char] += 1
    //     } else {
    //         obj2[char] = 1
    //     }
    // }

    // return JSON.stringify(obj1) === JSON.stringify(obj2)
}

console.log(checkAnagram('listen', 'abc'))