//* 1 manual
// function getAnimals(arr) {
//     // Write your code here
//     let result = [];
//     let animalK = "",
//         animalH = "",
//         animalO = "";

//     //* manual split for
//     let animalSplit = [];
//     // for (let i = 0; i < arr.length; i++) {
//     //     let tempArr = [];
//     //     let temp = "";
//     //     const indexI = arr[i];
//     //     for (let j = 0; j < indexI.length; j++) {
//     //         const indexJ = indexI[j];
//     //         if (indexJ == ":") {
//     //             tempArr.push(temp);
//     //             temp = "";
//     //         } else {
//     //             temp += indexJ;
//     //         }
//     //     }
//     //     tempArr.push(temp);
//     //     animalSplit.push(tempArr);
//     // }

//     //* manual split forEach
//     arr.forEach((animal) => {
//         let temArr = [],
//             temp = "";

//         [...animal].forEach((char) => {
//             if (char == ":") {
//                 temArr.push(temp);
//                 temp = "";
//             } else {
//                 temp += char;
//             }
//         });
//         temArr.push(temp);
//         animalSplit.push(temArr);
//     });

//     for (let i = 0; i < animalSplit.length; i++) {
//         const indexI = animalSplit[i];
//         [name, type] = indexI;

//         if (type == "K") {
//             if (name.length > animalK.length) {
//                 animalK = name;
//             }
//         }
//         if (type == "H") {
//             if (name.length > animalH.length) {
//                 animalH = name;
//             }
//         }
//         if (type == "O") {
//             if (name.length > animalO.length) {
//                 animalO = name;
//             }
//         }
//     }
//     result.push(animalK, animalH, animalO);

//     return result;
// }

//*2 build in function split()
function getAnimals(arr) {
    // Write your code here
    let result = [];
    let longestK = "",
        longestH = "",
        longestO = "";

    arr.forEach((animal) => {
        [name, type] = animal.split(":");
        if (type == "K" && name.length > longestK) longestK = name;
        if (type == "H" && name.length > longestH) longestH = name;
        if (type == "O" && name.length > longestO) longestO = name;
    });
    result.push(longestK, longestH, longestO);
    return result;
}

//Test Case

console.log(getAnimals(["Singa:K", "Kuda:H", "Monyet:O"]));
// // [ 'Singa','Kuda','Monyet' ]

console.log(
    getAnimals([
        "Macan:K",
        "Ayam:O",
        "Gajah:H",
        "Monyet:O",
        "Kerbau:H",
        "Musang:O",
        "Burung:H",
        "Hiu:K",
    ])
);
// [ 'Macan', 'Kerbau', 'Monyet' ]

console.log(
    getAnimals([
        "Tikus:O",
        "Merpati:H",
        "Beruang:O",
        "Elang:K",
        "Perkutut:H",
        "Harimau:K",
    ])
);
// [ 'Harimau', 'Perkutut', 'Beruang' ]
