const removeVowels = (str) => {
    const vowels = 'aeiouAEIOU'
    let result = ''
    for (char of str) {
        if (!vowels.includes(char)) {
            result += char
        }
    }

    return result
}
console.log(removeVowels('Remove all vowels from this string.'))
