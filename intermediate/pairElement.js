// DNA Pairing

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
    let newArr = [];
    let toArr = str.split('');

    for (let i = 0; i < toArr.length; i++) {
        const letter = toArr[i];

        switch (letter) {
            case 'G':
                newArr.push([letter, 'C']);
                break;

            case 'C':
                newArr.push([letter, 'G']);
                break;

            case 'A':
                newArr.push([letter, 'T']);
                break;

            case 'T':
                newArr.push([letter, 'A']);
                break;

            default:
                break;
        }
    }
    return newArr;
}

// console.log(pairElement('GCG'));
// [["G", "C"], ["C","G"], ["G", "C"]]

console.log(pairElement('TTGAG'));
// [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]
