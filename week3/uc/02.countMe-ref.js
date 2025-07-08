//*1
function countMe(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        const indexI = arr[i];
        if (result[indexI] === undefined) {
            result[indexI] = 0;
        }
        result[indexI]++;
    }

    return result;
}

//*2

// function countMe(arr) {
//     let result = {};

//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         result[item] = (result[item] || 0) + 1;
//     }
//     return result;
// }

console.log(countMe(["Sofyan", "Ricky", "Sofyan", "Semmi", "Semmi", "Wika"]));
// { Sofyan: 2, Ricky: 1, Semmi: 2, Wika: 1 }

console.log(countMe([1, 15, 9, 10, 8, 1, 12, 15, 10, 3]));
// { '1': 2, '3': 1, '8': 1, '9': 1, '10': 2, '12': 1, '15': 2 }

module.exports = countMe;
