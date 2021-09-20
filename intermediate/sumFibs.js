// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function fib(num) {
    if (num <= 0) return undefined;
    else if (num === 1 || num === 2) return 1;

    let prev = 1,
        p_prev = 1,
        curr,
        sum = 2;

    for (let i = 2; i < num; i++) {
        curr = prev + p_prev;

        if (curr % 2 !== 0 && curr <= num) {
            sum += curr;
        }

        p_prev = prev;
        prev = curr;
    }

    return sum;
}

console.log(fib(10)); // 10
