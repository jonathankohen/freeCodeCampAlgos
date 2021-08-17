// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

const vowels = ['a', 'e', 'i', 'o', 'u'],
    consonants = [
        'b',
        'c',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'm',
        'n',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];

function translatePigLatin(str) {
    let arr = str.split(''),
        newStr = '';

    for (let i = 0; i < arr.length; i++) {
        const char = arr[i];

        if (i === 0 && consonants.includes(char)) {
            newStr += arr.slice(1).join('');
            newStr += char + 'ay';
        } else if (i === 0 && vowels.includes(char)) {
            newStr += str + 'way';
        }
    }
    return newStr;
}

console.log(translatePigLatin('consonant'));
console.log(translatePigLatin('algorithim'));
