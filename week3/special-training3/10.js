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

// * V2 : init value resutlnya ada didalam looping..
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
// function groupingId(arr) {
//* manual
// let result = {};

// arr.forEach((user) => {
//     if (user.id % 2 == 0) {
//         if (!result.genap) result.genap = {};
//         if (!result.genap.list) result.genap.list = [];
//         result.genap.list.push(user.name);
//     } else {
//         if (!result.ganjil) result.ganjil = {};
//         if (!result.ganjil.list) result.ganjil.list = [];
//         result.ganjil.list.push(user.name);
//     }
// });
// return result;

// * templete result
// let genap = { list: [] },
//     ganjil = { list: [] };

// arr.forEach((user) => {
//     user.id % 2 == 0
//         ? genap.list.push(user.name)
//         : ganjil.list.push(user.name);
// });
// return { genap, ganjil };
// }

//*filter & map
// function groupingId(arr) {
//   let genap = { list: [] },
//       ganjil = { list: [] };
// const genapId = arr
//     .filter((students) => students.id % 2 == 0)
//     .map(({ name }) => name);
// const ganjilId = arr
//     .filter((students) => students.id % 2 != 0)
//     .map(({ name }) => name);
// genap.list.push(genapId);
// ganjil.list.push(ganjilId);
// return { genap, ganjil };
// }

//* one liner filter & map, arrow funct obj literal
// const groupingId = (arr) => ({
//     genap: {
//         list: arr.filter(({ id }) => id % 2 == 0).map(({ name }) => name),
//     },
//     ganjil: {
//         list: arr.filter(({ id }) => id % 2 != 0).map(({ name }) => name),
//     },
// });

//*reduce
// function groupingId(arr) {
//   let genap = { list: [] },
//       ganjil = { list: [] };
// genap.list = arr.reduce((acc, students) => {
//     if (students.id % 2 == 0) acc.push(students.name);
//     return acc;
// }, []);
// ganjil.list = arr.reduce((acc, students) => {
//     if (students.id % 2 != 0) acc.push(students.name);
//     return acc;
// }, []);
// return { genap, ganjil };}
// }

//* one liner reduce
// const groupingId = (arr) =>
//     arr.reduce(
//         (acc, { id, name }) => {
//             const key = id % 2 == 0 ? "genap" : "ganjil";
//             acc[key].list.push(name);
//             return acc;
//         },
//         { genap: { list: [] }, ganjil: { list: [] } }
//     );
//* one liner reduce more dry, comma operator
const groupingId = (arr) =>
    arr.reduce(
        (acc, { id, name }) => (
            acc[id % 2 ? "ganjil" : "genap"].list.push(name), acc
        ),
        { genap: { list: [] }, ganjil: { list: [] } }
    );

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
// console.log(groupingIdV2(multiArr));
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
