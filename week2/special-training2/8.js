/*
Buatlah sebuah function highestLowest untuk mendapatkan angka terbesar dan terkecil dari sebuah array multidimensi
*/
// * 1 manual

// function highestLowest(arr) {
//     // tulis kode disini
//     let result = [];
//     let min = Infinity;
//     let max = 0;
//     arr.forEach((indexI) => {
//         indexI.forEach((indexJ) => {
//             indexJ.forEach((indexK) => {
//                 indexK < min ? (min = indexK) : min;
//                 indexK > max ? (max = indexK) : max;
//             });
//         });
//     });
//     result.push(min, max);
//     return result;
// }

//*2 flat()
function highestLowest(arr) {
    // tulis kode disini
    let result = [];
    let min = Infinity;
    let max = 0;
    arr.flat(2).forEach((el) => {
        el < min ? (min = el) : min;
        el > max ? (max = el) : max;
    });
    result.push(min, max);
    return result;
}

//*3 buildin function one liner

// const highestLowest = (arr) => (
//     (e = arr.flat(Infinity)), [Math.min(...e), Math.max(...e)]
// );

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

console.log(highestLowest(data)); // [1, 90] => 1 yang terkecil dan 90 yang terbesar
