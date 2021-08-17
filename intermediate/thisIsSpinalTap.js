// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// Solution 1:
// function spinalCase(str) {
//     let lower = str.toLowerCase(),
//         newStr = '';

//     for (let i = 0; i < lower.length; i++) {
//         lower[i] === ' ' ? (newStr += '-') : (newStr += lower[i]);
//     }

//     return newStr;
// }

// Solution 2:
// function spinalCase(str) {
//     return str.toLowerCase().split(' ').join('-');
// }

// Solution 3:
function spinalCase(str) {
    return str.toLowerCase().replace(/\s/g, '-');
}

console.log(spinalCase('This Is Spinal Tap'));
