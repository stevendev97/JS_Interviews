// Challenge: Write a JavaScript function named fizzBuzz that prints each number from 1 to n. 
// For multiples of three, print "Fizz" instead of the number, 
// and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".

// Requirements:

// The function should take a single integer n as an argument.
// It should log the results to the console.
// For example, fizzBuzz(15) should output the sequence: 
//1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz" to the console.



const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(15)


// Answer from ChatGPT:
// const fizzBuzz = (n) => {
//     for (let i = 1; i <= n; i++) {
//         const output = (i % 3 === 0 && i % 5 === 0) ? 'FizzBuzz' :
//                        (i % 3 === 0) ? 'Fizz' :
//                        (i % 5 === 0) ? 'Buzz' : i;
//         console.log(output);
//     }
// }
