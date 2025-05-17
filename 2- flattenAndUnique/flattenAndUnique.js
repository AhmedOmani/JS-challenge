//Solution without using any built in function
function flattenAndUnique(arr) {
    let flattenArray = [] ;
    for (let i = 0 ; i < arr.length ; i++) {
        if (Array.isArray(arr[i])) {
            returnedArr = flattenAndUnique(arr[i]);
            for (let j = 0 ; j < returnedArr.length ; j++) flattenArray.push(returnedArr[j]);
        } else {
            flattenArray.push(arr[i]);
        }
    }
    return flattenArray;
}

const arr = [1 , 2 , 3 , [4 , 5, [6 , 7 , 8 , [9 , 1 , 11]]]];
const flattenArr = flattenAndUnique(arr);
console.log(flattenArr.length);

let visited = new Set();
let finalArray = [];
for (let i = 0 ; i < flattenArr.length ; i++) {
    if (visited.has(flattenArr[i])) continue ;
    finalArray.push(flattenArr[i]);
    visited.add(flattenArr[i]);
}

console.log(finalArray);
