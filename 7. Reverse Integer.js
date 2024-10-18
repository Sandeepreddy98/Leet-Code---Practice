// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

function reverseInteger(number) {
    let initial = number * Math.sign(number)
    let final = 0
    while(initial > 0 ){
        let remainder= initial % 10
        final = final * 10 + remainder
        initial = Math.floor(initial / 10)
    }

    return Math.sign(number) * final
}

console.log(reverseInteger(-123));