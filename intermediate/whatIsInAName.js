function whatIsInAName(arr, target) {
    return arr.filter((item, i) => item[i] === target[i]);
}

console.log(
    whatIsInAName(
        [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
        { apple: 1, bat: 2 }
    )
);

//
