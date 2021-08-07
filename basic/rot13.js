const rot13 = (str) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    punctuation = '!,./?';

  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    if (letter === ' ') {
      newStr += ' ';
      continue;
    }

    if (punctuation.includes(letter)) {
      newStr += letter;
      continue;
    }

    let shift = alphabet.indexOf(letter) + 13;

    if (shift >= 26) {
      shift -= 26;
    }

    newStr += alphabet.charAt(shift);
  }

  return newStr;
};

console.log(rot13('SERR PBQR PNZC'));
