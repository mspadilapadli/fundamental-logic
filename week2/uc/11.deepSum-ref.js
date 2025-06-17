// * 1 manual split - for
// function deepSum(arr) {
//     if (arr.length <= 0) return "No Number";
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const indexI = arr[i];
//         for (let j = 0; j < indexI.length; j++) {
//             const indexJ = indexI[j];
//             for (let k = 0; k < indexJ.length; k++) {
//                 const indexK = indexJ[k];
//                 total += indexK;
//             }
//         }
//     }
//     return total;
// }

// * 2 with build in function

function deepSum(arr) {
    if (arr.length == 0) return "No Number";
    let total = 0;
    arr.flat(2).forEach((num) => {
        total += num;
    });
    return total;
}

//  * 3 with reduce()

// function deepSum(arr) {
//     if (arr.length == 0) return "No Number";

//     return arr
//         .flat(Infinity)
//         .reduce((total, currValue) => (total += currValue), 0);
// }

console.log(
    deepSum([
        [
            [4, 5, 6],
            [9, 1, 2, 10],
            [9, 4, 3],
        ],
        [
            [4, 14, 31],
            [9, 10, 18, 12, 20],
            [1, 4, 90],
        ],
        [
            [2, 5, 10],
            [3, 4, 5],
            [2, 4, 5, 10],
        ],
    ])
); // 316

console.log(
    deepSum([
        [[20, 10], [15], [1, 1]],
        [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
        [[3, 5, 1], [1, 5, 3], [1]],
        [[2]],
    ])
); // 156

console.log(deepSum([])); // No number

console.log(
    deepSum([
        [[20, 10], [15], [1, 1]],
        [[1, 2, 3, 9, 10, 11], [2], [9, 11]],
        [[2]],
    ])
); // 107
