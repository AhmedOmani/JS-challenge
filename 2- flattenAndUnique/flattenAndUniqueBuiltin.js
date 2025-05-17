//Solution with Builtin functions

function flattenAndUnique(arr) {
    const flattened = arr.flat(Infinity);
    return [...new Set(flattened)];
}

const arr = [1, 2, 3, [4, 5, [6, 7, 8, [9, 1, 11]]]];
const finalArrayRefactored = flattenAndUniqueRefactored(arr);
console.log(finalArrayRefactored.length);
console.log(finalArrayRefactored);