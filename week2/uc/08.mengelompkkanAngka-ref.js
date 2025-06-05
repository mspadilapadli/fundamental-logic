// *1
// function mengelompokkanAngka(arr) {
//     let result = [];
//     let kelipatan3 = [];
//     let genap = [];
//     let ganjil = [];

//     for (let i = 0; i < arr.length; i++) {
//         const indexI = arr[i];
//         indexI % 3 === 0
//             ? kelipatan3.push(indexI)
//             : indexI % 2 === 0
//             ? genap.push(indexI)
//             : ganjil.push(indexI);
//     }
//     result.push(genap, ganjil, kelipatan3);
//     return result;
// }

//*2
function mengelompokkanAngka(arr) {
    //destruct
    let [genap, ganjil, kelipatan3] = [[], [], []];
    arr.forEach((el) =>
        el % 3 == 0
            ? kelipatan3.push(el)
            : el % 2 == 0
            ? genap.push(el)
            : ganjil.push(el)
    );

    return [genap, ganjil, kelipatan3];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6]));
// [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9]));
// [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111]));
// [[100, 122], [151], [99, 111]];
console.log(mengelompokkanAngka([]));
// [ [], [], [] ]
