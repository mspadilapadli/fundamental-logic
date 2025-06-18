// realese 0
function sorting(array) {
    //bubel sort
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            const indexJ = array[j];
            if (indexJ > array[j + 1]) {
                let temp = indexJ;
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}
console.log(sorting([2, 4, 6, 8, 2, 3])); //[ 2, 2, 3, 4, 6, 8 ]

// release 1
function sortingByType(array) {
    let result = [];
    let arrNum = [];
    let arrStr = [];
    let arrBoolean = [];

    for (let i = 0; i < array.length; i++) {
        const indexI = array[i];
        if (typeof indexI == "number") {
            arrNum.push(indexI);
        }
        if (typeof indexI == "string") {
            arrStr.push(indexI);
        }
        if (typeof indexI == "boolean") {
            arrBoolean.push(indexI);
        }
    }

    arrNum = sorting(arrNum);
    arrStr = sorting(arrStr);
    arrBoolean = sorting(arrBoolean);

    result.push(arrNum, arrStr, arrBoolean);

    return result;
}
console.log(sortingByType([1, 3, "array", -45, true, false, "big"]));
// [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]

// release 2
function sortAllClean(array) {
    let arrTemp = [];

    for (let i = 0; i < array.length; i++) {
        const indexI = array[i];

        if (
            indexI === undefined ||
            indexI === null ||
            (typeof indexI === "number" && isNaN(indexI)) ||
            (Array.isArray(indexI) && indexI.length === 0)
        ) {
            continue;
        } else {
            arrTemp.push(indexI);
        }
    }
    if (arrTemp.length === 0) return [];
    let result = sortingByType(arrTemp);
    return result;
}
console.log(
    sortAllClean([
        undefined,
        null,
        456,
        "def",
        NaN,
        [],
        true,
        123,
        "bcd",
        false,
    ])
);
//[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]

console.log(sortAllClean([NaN, undefined])); // []
console.log(sortAllClean([NaN, undefined, 1, "bc"])); // []
