// Return the length of the longest word in the provided sentence.

// Your response should be a number.

const findLongestWordLength = str => {
    let arr = str.split(' '),
        longest = arr[0].length;

    arr.forEach(word => {
        if (word.length > longest) {
            longest = word.length;
        }
    });

    return longest;
};

console.log(
    findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
