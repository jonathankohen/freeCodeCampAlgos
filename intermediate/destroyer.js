// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

function destroyer(...args) {
    return arguments[0].filter(arg => !args.slice(1).includes(arg));
}

console.log(
    destroyer(
        [
            'possum',
            'trollo',
            12,
            'safari',
            'hotdog',
            92,
            65,
            'grandma',
            'bugati',
            'trojan',
            'yacht',
        ],
        'yacht',
        'possum',
        'trollo',
        'safari',
        'hotdog',
        'grandma',
        'bugati',
        'trojan'
    )
);
