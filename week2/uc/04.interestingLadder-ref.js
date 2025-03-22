function ladder(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        let tempArr = [];
        for (let j = 0; j < str.length - i; j++) {
            const indexJ = str[j];
            tempArr.push(indexJ);
        }
        result.push(tempArr);
    }
    return result;
}

console.log(ladder("hacktiv8"));

// expected output
// [
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i' ],
//   [ 'h', 'a', 'c', 'k', 't' ],
//   [ 'h', 'a', 'c', 'k' ],
//   [ 'h', 'a', 'c' ],
//   [ 'h', 'a' ],
//   [ 'h' ]
// ]
