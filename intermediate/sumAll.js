// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

const sumAll = arr => {
    let max = Math.max(arr[0], arr[1]),
        min = Math.min(arr[0], arr[1]),
        newArr = [];

    for (let i = min; i <= max; i++) {
        newArr.push(i);
    }

    return newArr.reduce((acc, curr) => acc + curr);
};

console.log(sumAll([1, 4]));

// find max of two
// set min as start, loop up to max, push all to arr
// add all in arr. reduce?
