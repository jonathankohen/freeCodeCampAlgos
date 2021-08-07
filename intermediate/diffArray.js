// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

// Note: You can return the array with its elements in any order.

// const diffArray = (arr1, arr2) => {
//     let newArr = [];

//     arr1.forEach((item, i) => {
//         if (!arr2.includes(item)) {
//             newArr.push(item);
//         }
//     });

//     arr2.forEach((item, i) => {
//         if (!arr1.includes(item)) {
//             newArr.push(item);
//         }
//     });

//     return newArr;
// };

const diffArray = (arr1, arr2) => {
    return arr1
        .concat(arr2)
        .filter(item => !arr1.includes(item) || !arr2.includes(item));
};

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
