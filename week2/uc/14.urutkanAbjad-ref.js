// * 1 manual
// function urutkanAbjad(str) {
//     // you can only write your code here!
//     let sorted = "";
//     let dicts = "abcdefghijklmnopqrstuvwxyz";
//     str = str.toLowerCase();
//     for (let i = 0; i < dicts.length; i++) {
//         const el = dicts[i];
//         for (let j = 0; j < str.length; j++) {
//             const elJ = str[j];
//             if (el == elJ) {
//                 sorted += elJ;
//             }
//         }
//     }
//     return sorted;
// }

// * bubble sorting manual
function urutkanAbjad(str) {
    //convert to array (mutable)
    let arrStr = [];
    let result = "";
    for (let i = 0; i < str.length; i++) {
        arrStr.push(str[i]);
    }

    //bubble
    // you must add -1 & - i , cuz if no, arr[j+1] will be undifined, and its not correct logic
    for (let i = 0; i < arrStr.length - 1; i++) {
        for (let j = 0; j < arrStr.length - 1 - i; j++) {
            const indexJ = arrStr[j];
            if (indexJ > arrStr[j + 1]) {
                let temp = arrStr[j];
                arrStr[j] = arrStr[j + 1];
                arrStr[j + 1] = temp;
            }
        }
    }
    // conver array to string
    for (let i = 0; i < arrStr.length; i++) {
        result += arrStr[i];
    }

    return result;
}

//*3 manual with string

// function urutkanAbjad(str) {
//     let sortedStr = "";

//     while (str.length > 0) {
//         //set minimal index & sorting
//         let minIndex = 0;
//         for (let i = 1; i < str.length; i++) {
//             const indexI = str[i];
//             if (indexI < str[minIndex]) {
//                 minIndex = i;
//             }
//         }
//         // get value from minIdex to sortedStr
//         sortedStr += str[minIndex];

//         // delete current value minIndex from str
//         let newStr = "";
//         for (let i = 0; i < str.length; i++) {
//             if (i != minIndex) newStr += str[i];
//         }
//         str = newStr;
//     }
//     return sortedStr;
// }

//*4 with build-in function
// function urutkanAbjad(str) {
//     return [...str].sort().join("");
//     // return str.split("").sort().join("");
// }
// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
