const repeatStringNumTimes = (str, num) => {
    if (str.length === 0 || num <= 0) {
        return '';
    }

    let newStr = '';

    for (let i = 0; i < num; i++) {
        newStr += str;
    }
    return newStr;
};

console.log(repeatStringNumTimes('abc', 3));
