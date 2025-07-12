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
