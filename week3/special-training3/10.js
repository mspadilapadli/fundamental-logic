/*
Buatlah sebuah function groupingId yang mengelompokkan object berdasarkan id
input function ini ada 1 parameter
- arr (data array of object)

output dari function ini adalah object dengan 2 key 
- genap (list nama students dengan id genap)
- ganjil (list nama students dengan id ganjil)

*/

// {
//     genap: {
//         list: [ 'Acong Budiman', 'Robert Downey', 'Lanu', 'Suki' ]
//     },
//     ganjil: {
//         list: [ 'Marco Tiger', 'Kris Evan', 'Yamme', 'Yalle']
//     }
// }

// * V2 : init value resutlnya ada didalam looping.
// function groupingIdV2(arr) {
//     let result = {};
//     for (let i = 0; i < arr.length; i++) {
//         const indexi = arr[i];
//         if (indexi.id % 2 === 0) {
//             if (!result.genap) {
//                 result.genap = {};
//             }
//             if (!result.genap.list) {
//                 result.genap.list = [];
//             }
//             result.genap.list.push(indexi.name);
//         } else {
//             if (!result.ganjil) {
//                 result.ganjil = {};
//             }
//             if (!result.ganjil.list) {
//                 result.ganjil.list = [];
//             }
//             result.ganjil.list.push(indexi.name);
//         }
//     }
//     return result;
// }

// * V1 : karena datanya templete bisa langsung kita hardcod untuk templete result nya.
// function groupingId(arr) {
//     let result = {
//         genap: {
//             list: [],
//         },
//         ganjil: {
//             list: [],
//         },
//     };

//     for (let i = 0; i < arr.length; i++) {
//         const indexi = arr[i];
//         if (indexi.id % 2 === 0) {
//             result.genap.list.push(indexi.name);
//         } else {
//             result.ganjil.list.push(indexi.name);
//         }
//     }

//     return result;
// }

// * V3
function groupingId(arr) {
    //* manual
    let result = {};

    arr.forEach((user) => {
        if (user.id % 2 == 0) {
            if (!result.genap) result.genap = {};
            if (!result.genap.list) result.genap.list = [];
            result.genap.list.push(user.name);
        } else {
            if (!result.ganjil) result.ganjil = {};
            if (!result.ganjil.list) result.ganjil.list = [];
            result.ganjil.list.push(user.name);
        }
    });
    return result;

    //* templete result
    let genap = { list: [] },
        ganjil = { list: [] };

    arr.forEach((user) => {
        user.id % 2 == 0
            ? genap.list.push(user.name)
            : ganjil.list.push(user.name);
    });
    return { genap, ganjil };
}

let multiArr = [
    { id: 1, name: "Marco Tiger", age: 26 },
    { id: 2, name: "Acong Budiman", age: 52 },
    { id: 3, name: "Kris Evan", age: 36 },
    { id: 4, name: "Robert Downey", age: 46 },
    { id: 10, name: "Lanu", age: 26 },
    { id: 12, name: "Suki", age: 52 },
    { id: 23, name: "Yamme", age: 36 },
    { id: 41, name: "Yalle", age: 46 },
];

console.log(groupingId(multiArr));
console.log(groupingIdV2(multiArr));
// {
//     genap: {
//         list: [ 'Acong Budiman', 'Robert Downey', 'Lanu', 'Suki' ]
//     },
//     ganjil: {
//         list: [ 'Marco Tiger', 'Kris Evan', 'Yamme', 'Yalle']
//     }
// }

// testing
// let result = {};

// if (!result.genap) {
//     result.genap = {};
// }
// if (!result.genap.list) {
//     result.genap.list = [];
// }
// console.log(result);
// result.genap.list.push("a");
// console.log(result);
