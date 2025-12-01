//*1
// function countMe(arr) {
//     let result = {};

//     for (let i = 0; i < arr.length; i++) {
//         const indexI = arr[i];
//         if (result[indexI] === undefined) {
//             result[indexI] = 0;
//         }
//         result[indexI]++;
//     }

//     return result;
// }

//*2

// function countMe(arr) {
//     let result = {};

//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         result[item] = (result[item] || 0) + 1;
//     }
//     return result;
// }

//*3 one liner
const countMe = (arr) =>
    arr.reduce((acc, name) => {
        acc[name] = (acc[name] || 0) + 1;
        return acc;
    }, {});

console.log(countMe(["Sofyan", "Ricky", "Sofyan", "Semmi", "Semmi", "Wika"]));
// { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }

console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]));
// { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }

module.exports = countMe;

//fallback / default value patten
// result[item] = (result[item] || 0) + 1;
/*
- Memberikan nilai default 0 jika undefined
- Operator || itu artinya:
"Kalau bagian kiri truthy, pakai itu. Kalau falsy (undefined, null, 0, false, dll), pakai bagian kanan."
Karena result[value] awalnya undefined (belum pernah muncul), maka:
(undefined || 0) → 0
Tapi kalau sudah ada dan misalnya nilainya 2:
(2 || 0) → 2

- (result[value] || 0) + 1
Artinya:
Kalau result[value] belum ada → 0 + 1 = 1
Kalau sudah ada misalnya 2 → 2 + 1 = 3

iterasi 1
result["Sofyan"] = (undefined || 0) + 1
result["Sofyan"] = 0 + 1
result["Sofyan"] = 1

iterasu 2
result["Sofyan"] = (1 || 0) + 1
result["Sofyan"] = 1 + 1
result["Sofyan"] = 2


*/
