function titleCase(str) {
    let arrStr = str.toLowerCase().split(' ');

    let result = arrStr.map(word =>
        word.replace(word.charAt(0), word.charAt(0).toUpperCase())
    );

    return result.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
