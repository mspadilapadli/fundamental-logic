// * 1 first way (i++ in neted por) :bare logic
// function sittingArrangement(person, col) {
//     let result = [];
//     //  return !col ? "Invalid number" : col;
//     if (!col) {
//         return `Invalid number`;
//     }

//     for (let i = 0; i < person.length; ) {
//         const indexI = person[i];
//         let arrTemp = [];
//         for (let j = 0; j < col; j++) {
//             if (person[i] === undefined) {
//                 //* harus menggunakan person[i], karena ada increment di dalam nested for, jika menggukaan indexI, maka akan redundan
//                 arrTemp.push("Kursi kosong");
//             } else {
//                 arrTemp.push(person[i]);
//             }
//             i++;
//         }
//         result.push(arrTemp);
//     }

//     return result;
// }

// *2 use count

// function sittingArrangement(person, col) {
//     let result = [];
//     let arrTemp = [];
//     let count = 0;
//   if (!col) {
//         return `Invalid number`;
//     }

//     for (let i = 0; i < person.length; i++) {
//         const indexI = person[i];
//         arrTemp.push(indexI);
//         count++;

//         if (count === col || i === person.length - 1) {
//             result.push(arrTemp);
//             arrTemp = [];
//             count = 0;
//         }
//     }
//     //   hanle kursi kosong, check lenght in last index result
//     let lastIndexinResult = result[result.length - 1];
//     if (lastIndexinResult.length < col) {
//         while (lastIndexinResult.length < col) {
//             lastIndexinResult.push("Kursi Kosong");
//         }
//     }
//     return result;
// }

// * 3 use flaging, while and for

function sittingArrangement(person, col) {
    let result = [];
    let flag = false;
    let indexPerson = 0;
    if (!col) {
        return `Invalid number`;
    }

    while (!flag) {
        let arrTemp = [];
        for (let i = 0; i < col; i++) {
            if (indexPerson > person.length - 1) {
                arrTemp.push("Kursi Kosong");
            } else {
                arrTemp.push(person[indexPerson]);
            }
            indexPerson++;
        }

        if (indexPerson >= person.length) {
            flag = true;
        }
        result.push(arrTemp);
    }
    return result;
}

//DRIVER CODE

console.log(sittingArrangement(["A", "B", "C"], 0)); //Invalid number
console.log(sittingArrangement(["Juli", "Nisa", "Desi", "Ulfa", "Puji"], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement(["Yosia", "Asrawi", "Andru"], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(
    sittingArrangement(["Lukman", "Adam", "Dimas", "Hansin", "Orion"], 4)
);
// [
//     ["Lukman", "Adam", "Dimas", "Hansin"],
//     ["Orion", "Kursi Kosong", "Kursi Kosong", "Kursi Kosong"],
// ];
