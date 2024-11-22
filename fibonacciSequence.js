const fibonacciSequence = (n) => {
    let result = [0]

    for (let i = 0; i < n - 1; i++) {

        if (result.length >= 2) {
            result.push(result[result.length - 1] + result[result.length - 2])

        } else {
            result.push(1)
        }
    }

    return result
}

console.log(fibonacciSequence(7))