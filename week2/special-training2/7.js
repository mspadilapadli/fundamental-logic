/*
Buatlah sebuah function deepSum yang menerima 1 parameter arr (array multidimensi), function akan mengembalikan sebuah number yang merupakan hasil penjumlahan semua angka yang terdapat di array
*/
//*1 manual
// function deepSum(arr) {
//     // tulis kode disini
//     let result = 0;
//     arr.forEach((indexI) => {
//         indexI.forEach((indexJ) => {
//             indexJ.forEach((indexK) => {
//                 result += indexK;
//             });
//         });
//     });

//     return result;
// }

//* 2 flat()
function deepSum(arr) {
    // tulis kode disini
    return arr.flat(2).reduce((total, curVal) => (total += curVal), 0);
}

let data = [
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
];

console.log(deepSum(data)); // 316
