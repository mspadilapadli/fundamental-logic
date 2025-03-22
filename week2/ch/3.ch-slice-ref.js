// * 1 first try

// function slice(data, start, end) {
//     if (!data && !start && !end) {
//         return "Invalid data";
//     }

//     let arrNewSlice = [];

//     if (data && start && end) {
//         end > data.length ? (end = data.length) : end;
//         for (let i = start; i < end; i++) {
//             const index = data[i];
//             arrNewSlice.push(index);
//         }
//     } else if (data && start) {
//         for (let s = start; s < data.length; s++) {
//             const indexS = data[s];
//             arrNewSlice.push(indexS);
//         }
//     } else if (start > data.length) {
//         return arrNewSlice;
//     } else {
//         return data;
//     }
//     return arrNewSlice;
// }

// *2 better try

function slice(data, start, end) {
    let newArrSlice = [];
    //  handel type data array or not
    if (!data || !Array.isArray(data)) {
        return "Invalid data";
    } else if (start > data.length || start > end) {
        return [];
    }
    // set start and end with default value
    start = start === undefined ? 0 : start;
    end = !end ? data.length : end > data.length ? data.length : end;

    //  i = start;
    while (start < end) {
        newArrSlice.push(data[start]);
        start++;
    }
    return newArrSlice;
}

// * 3 more advance
// function slice(data, start, end) {
//     if (!Array.isArray(data)) {
//         return "Invalid data";
//     }

//     const result = [];
//     let startIndex = start === undefined ? 0 : start;
//     let endIndex = end === undefined ? data.length : end;

//     //  handle if start negatif
//     if (startIndex < 0) {
//         startIndex = data.length + startIndex;
//     }

//     //  handle if end negatif
//     if (endIndex < 0) {
//         endIndex = data.length + endIndex;
//     }

//     if (startIndex > data.length) {
//         return [];
//     }

//     if (endIndex > data.length) {
//         endIndex = data.length;
//     }

//     //  *handle if start tetap negatif setelah  sebelumnya ditambah dengan data.length (negatif besar) :
//     if (startIndex < 0) {
//         startIndex = 0;
//     }
//     //  *handle if end tetap negatif setelah  sebelumnya ditambah dengan data.length (negatif besar) :
//     if (endIndex < 0) {
//         endIndex = 0;
//     }

//     if (startIndex > endIndex) {
//         return [];
//     }

//     let i = startIndex;
//     while (i < endIndex) {
//         result.push(data[i]);
//         i++;
//     }

//     return result;
// }

console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 1, 9)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 20)); //[]
console.log(slice()); //Invalid data
console.log(slice("data", 2));

// advance
// console.log(slice(["ant", "bison", "camel", "duck", "elephant"], -2)); // [ 'duck', 'elephant' ]
// console.log(slice(["ant", "bison", "camel", "duck", "elephant"], -2, -1)); // [ 'duck' ]
// //  ex negatig besar, setlah data.lengt+start/end tetapi value masih negatif
// console.log(slice(["ant", "bison", "camel", "duck", "elephant"], -10)); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
// console.log(slice(["ant", "bison", "camel", "duck", "elephant"], 0, -10)); //[]
// console.log(slice(["ant", "bison", "camel", "duck", "elephant"], -10, -8)); //[]
