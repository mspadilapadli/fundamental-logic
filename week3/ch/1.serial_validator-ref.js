function splitString(str) {
    // Your code here
    const result = [];
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (char == " ") {
            result.push(temp);
            temp = "";
        } else {
            temp += char;
        }
    }
    result.push(temp);

    // oneliner;
    // str.split(" ");

    return result;
}

// *comma opration, concat array
// const splitString = (str) => {
//     let result = [],
//         temp = "";
//     [...str].forEach((char) =>
//         char == " " ? (result.push(temp), (temp = "")) : (temp += char)
//     );
//     return result.concat(temp);
// };

// console.log(splitString("79 08 86 79"));
// // [ '79', '08', '86', '79' ]

// console.log(splitString("124 765"));
// [ '124', '765' ]

// *=====================================================
// function reverseOddIndex(arr) {
//     // Your code here
//     let result = [];

//     // * manual forEadh - for
//     arr.forEach((num, index) => {
//         if (index % 2 != 0) {
//             // num = "a";

//             let reversedNum = "";
//             for (let i = 0; i < num.length; i++) {
//                 reversedNum += num[num.length - 1 - i];
//             }
//             // console.log(num);
//             num = reversedNum;
//         }

//         result.push(num);
//     });
//     return result;

// * manual nested forEach
// arr.forEach((num, index) => {
//     if (index % 2 != 0) {
//         let reversedNum = "";

//         [...num].forEach((char, index) => {
//             reversedNum += num[num.length - 1 - index];
//         });

//         num = reversedNum
//     }
//     result.push(num)
// });
// return result;
// }

// * map() & reverse()
const reverseOddIndex = (arr) =>
    arr.map((num, index) =>
        index % 2 == 0 ? num : num.split("").reverse().join("")
    );

// console.log(reverseOddIndex(["79", "08", "86", "79"]));
// [ '79', '80', '86', '97' ]

// console.log(reverseOddIndex(["124", "765"]));
// [ '124', '567' ]

// *=====================================================
// function decryptElement(arr) {
//     // Your code here
// let result = [];
// let symbol = "!@#$%^&*()";

//     arr.forEach((numbers, index) => {
//         let temp = "";
//         if (index % 2 != 0) {
//             for (let i = 0; i < numbers.length; i++) {
//                 const char = numbers[i];
//                 char == 0 ? (temp += symbol[9]) : (temp += symbol[char - 1]);
//             }
//         } else {
//             for (let i = 0; i < numbers.length; i++) {
//                 const char = numbers[i];
//                 temp += symbol[char];
//             }
//         }
//         // move redundance push
//         result.push(temp);
//     });

//     return result;
// }

//*map() & for
// const decryptElement = (arr) => {
//     // let result = [];
//     const symbol = "!@#$%^&*()";
//     return arr.map((num, idx) => {
//         let temp = "";

//         for (let i = 0; i < num.length; i++) {
//             const char = num[i];
//             if (idx % 2 != 0) {
//                 char == 0 ? (temp += symbol[9]) : (temp += symbol[char - 1]);
//             } else {
//                 temp += symbol[char];
//             }
//         }
//         return temp;
//     });
// };

//*map() & map()
// const decryptElement = (arr) => {
//     const symbol = "!@#$%^&*()";
//     return arr.map((num, idx) =>
//         [...num]
//             .map((n) => {
//                 if (idx % 2 == 0) {
//                     return symbol[+n];
//                 } else {
//                     return symbol[+n == 0 ? 9 : n - 1];
//                 }
//             })
//             .join("")
//     );
// };

//* one liner map()
const decryptElement = (arr) => {
    const symbol = "!@#$%^&*()";
    return arr.map((num, idx) =>
        [...num]
            .map((n) => symbol[idx % 2 == 0 ? +n : +n == 0 ? 9 : +n - 1])
            .join("")
    );
};

// console.log(decryptElement(["79", "80", "86", "97"]));
// [ '*)', '*)', '(&', '(&' ]
/*
penjelasan :

0 1 2 3 4 5 6 7 8 9
! @ # $ % ^ & * ( )

untuk index genap
'79' --> index 0
'7' diubah menjadi symbol '*'
'9' diubah menjadi symbol ')'

untuk index ganjil
'80' --> index 1
'8' dikurangi 1 = 7, diubah menjadi symbol '*'
'0' karena 0 maka diganti menjadi 9
'9' diubah menjadi symbol ')'
*/

// console.log(decryptElement(["124", "567"]));
// [ '@#%', '%^&' ]

// *=====================================================
// function groupingSymbol(arr) {
//     // Your code here
//     let result = [];

//     //* manual
//     let temp = [];
//     for (let i = 0; i < arr.length; i++) {
//         const indexI = arr[i];
//         temp.push(indexI);
//         if (temp.length == 2) {
//             result.push(temp);
//             temp = [];
//         }
//     }

//     //* slice()
//     // for (let i = 0; i < arr.length; i += 2) {
//     //     const group = arr.slice(i, i + 2);
//     //     result.push(group);
//     // }
//     return result;
// }
//* just try reduce()
// const groupingSymbol = (arr) =>
//     arr.reduce((result, curr, idx) => {
//         if (idx % 2 == 0) {
//             result.push([curr]);
//         } else {
//             result[result.length - 1].push(curr);
//         }
//         return result;
//     }, []);

//* just try reduce() one liner
// const groupingSymbol = (arr) =>
//     arr.reduce(
//         (r, c, i) => (i % 2 ? r[r.length - 1].push(c) : r.push([c]), r),
//         []
//     );

//* just try reduce(), slice() - mutable syle
const groupingSymbol = (arr) =>
    arr.reduce((r, c, i) => {
        if (i % 2 == 0) r.push(arr.slice(i, i + 2));
        return r;
    }, []);

console.log(groupingSymbol(["*)", "*)", "(&", "(&"]));

// [
//   [ '*)', '*)' ],  --> berisi index 0 dan index 1 dari array input
//   [ '(&', '(&' ]   --> berisi index 2 dan index 3 dari array input
// ]

// console.log(groupingSymbol(["@#%", "%^&"]));
// [
//   [ '@#%', '%^&' ]
// ]

// *=====================================================
function serialValidator(str) {
    // Your code here
    if (str.length < 9) return `Harus lebih dari 9 Karakter`;

    let splitedString = splitString(str);
    let reversedOddIndex = reverseOddIndex(splitedString);
    let decryptedEl = decryptElement(reversedOddIndex);
    let grouped = groupingSymbol(decryptedEl);

    for (let i = 0; i < grouped.length; i++) {
        const el = grouped[i];
        [index0, index1] = el;
        if (index0 !== index1) return "Invalid serial numnber";
    }
    return "Serial number is valid";
}

// console.log(serialValidator("1234"));
// // Harus lebih dari 9 karakter

// console.log(serialValidator("79 08 86 79"));
// // Serial number is valid

// console.log(serialValidator("124 765 876 678"));
// // Invalid serial number

// console.log(serialValidator("4947 8505 6843 4597"));
// // Serial number is valid

// console.log(serialValidator("3417 1218 1813 1311"));
// Invalid serial number

/*
contoh 1:
hasil dari groupingSymbol
[
  [ '*)', '*)' ], --> index 0 dan index 1 bernilai sama
  [ '(&', '(&' ]  --> index 0 dan index 1 bernilai sama
]
output:
`Serial number is valid`

contoh 2:
hasil dari groupingSymbol
[
  [ '*#', '(&' ], --> index 0 dan index 1 TIDAK sama
  [ '(&', '(&' ]  --> index 0 dan index 1 bernilai sama
]
output:
`Invalid serial number`
*/
