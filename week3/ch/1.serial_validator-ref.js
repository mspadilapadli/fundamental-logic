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
