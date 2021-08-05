const convertToRoman = num => {
    let result = '';

    const breakpoints = [
        { name: 'M', value: 1000 },
        { name: 'CM', value: 900 },
        { name: 'D', value: 500 },
        { name: 'CD', value: 400 },
        { name: 'C', value: 100 },
        { name: 'XC', value: 90 },
        { name: 'L', value: 50 },
        { name: 'XL', value: 40 },
        { name: 'X', value: 10 },
        { name: 'IX', value: 9 },
        { name: 'V', value: 5 },
        { name: 'IV', value: 4 },
        { name: 'I', value: 1 },
    ];

    const converter = breakpoint => {
        let target = breakpoints.filter(roman => roman.value < breakpoint)[0];
        console.log(target);

        if (num - target.value > -1) {
            num -= target.value;
            result += target.name;
        } else {
            return false;
        }

        return num;
    };
    console.log(converter(num));

    while (num !== 0) {
        converter(num);
    }

    return result;
};

console.log(convertToRoman(29));

// while (num !== 0) {
//     if (num - 1000 > -1) {
//         num -= 1000;
//         result += 'M';
//     } else if (num - 900 > -1) {
//         num -= 900;
//         result += 'CM';
//     } else if (num - 500 > -1) {
//         num -= 500;
//         result += 'D';
//     } else if (num - 400 > -1) {
//         num -= 400;
//         result += 'CD';
//     } else if (num - 100 > -1) {
//         num -= 100;
//         result += 'C';
//     } else if (num - 90 > -1) {
//         num -= 90;
//         result += 'XC';
//     } else if (num - 50 > -1) {
//         num -= 50;
//         result += 'L';
//     } else if (num - 40 > -1) {
//         num -= 40;
//         result += 'XL';
//     } else if (num - 10 > -1) {
//         num -= 10;
//         result += 'X';
//     } else if (num - 9 > -1) {
//         num -= 9;
//         result += 'IX';
//     } else if (num - 5 > -1) {
//         num -= 5;
//         result += 'V';
//     } else if (num - 4 > -1) {
//         num -= 4;
//         result += 'IV';
//     } else if (num - 1 > -1) {
//         num -= 1;
//         result += 'I';
//     }
// }
