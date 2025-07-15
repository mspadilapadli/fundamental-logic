function splitString(str) {
    // Your code here
    let result = [];
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

    // str.split(" ");

    return result;
}

// console.log(splitString("79 08 86 79"));
// // [ '79', '08', '86', '79' ]

// console.log(splitString("124 765"));
// // [ '124', '765' ]

//=====//
function reverseOddIndex(arr) {
    // Your code here
    let result = [];

    // * manual forEadh - for
    arr.forEach((num, index) => {
        if (index % 2 != 0) {
            // num = "a";

            let reversedNum = "";
            for (let i = 0; i < num.length; i++) {
                reversedNum += num[num.length - 1 - i];
            }
            // console.log(num);
            num = reversedNum;
        }

        result.push(num);
    });

    // * reversed()
    // arr.forEach((num, index) => {
    //     if (index % 2 != 0) {
    //         // num = "a";
    //         num = num.split("").reverse().join("");
    //     }

    //     result.push(num);
    // });

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

    return result;
}

console.log(reverseOddIndex(["79", "08", "86", "79"]));
// [ '79', '80', '86', '97' ]

// console.log(reverseOddIndex(["124", "765"]));
// [ '124', '567' ]

// ==== //
function decryptElement(arr) {
    // Your code here
    let result = [];
    let symbol = "!@#$%^&*()";

    arr.forEach((numbers, index) => {
        let temp = "";
        if (index % 2 != 0) {
            for (let i = 0; i < numbers.length; i++) {
                const char = numbers[i];
                char == 0 ? (temp += symbol[9]) : (temp += symbol[char - 1]);
            }
            result.push(temp);
        } else {
            for (let i = 0; i < numbers.length; i++) {
                const char = numbers[i];
                temp += symbol[char];
            }
            result.push(temp);
        }
    });

    return result;
}

console.log(decryptElement(["79", "80", "86", "97"]));
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

console.log(decryptElement(["124", "567"]));
// [ '@#%', '%^&' ]

//====//
function groupingSymbol(arr) {
    // Your code here
    let result = [];

    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        const indexI = arr[i];
        temp.push(indexI);
        if (temp.length == 2) {
            result.push(temp);
            temp = [];
        }
    }

    return result;
}

console.log(groupingSymbol(["*)", "*)", "(&", "(&"]));
// [
//   [ '*)', '*)' ],  --> berisi index 0 dan index 1 dari array input
//   [ '(&', '(&' ]   --> berisi index 2 dan index 3 dari array input
// ]

console.log(groupingSymbol(["@#%", "%^&"]));
// [
//   [ '@#%', '%^&' ]
// ]
