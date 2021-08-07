const confirmEnding = (str, target) => {
    return str.substr(str.length - target.length) === target ? true : false;
};

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('Congratulation', 'on'));
console.log(confirmEnding('Open Sesame', 'same'));
console.log(confirmEnding('Open Sesame', 'sxame'));

// get substring of end of string, and compare it to target
