// * 1
function targetTerdekat(arr) {
    let result;
    let target = false;
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
        const indexI = arr[i];
        if (indexI === "x") {
            for (let i = 0; i < arr.length; i++) {
                const indexI = arr[i];

                if (indexI === "o") {
                    while (!target) {
                        if (arr[i + count] === "x" && i + count < arr.length) {
                            result = count;
                            target = true;
                        } else if (arr[i - count] === "x" && i + count >= 0) {
                            result = count;
                            target = true;
                        }
                        count++;
                    }
                }
            }
            break;
        } else {
            result = 0;
        }
    }

    return result;
}

// *2
function targetTerdekat(arr) {
    let o,
        x = null;
    for (let i = 0; i < arr.length; i++) {
        const index = arr[i];
        index === "o" ? (o = i) : o;
        index === "x" ? (x = i) : x;

        //  handle stop searching if o & x found
        if (o != null && x != null) {
            break;
        }
    }

    if (o == null || x == null) {
        return 0;
    }

    return o > x ? o - x : x - o;
}

// * 3
function targetTerdekat(arr) {
    let indexO = -1;
    let indexX = [];

    for (let i = 0; i < arr.length; i++) {
        const indexI = arr[i];
        if (indexI === "o") {
            indexO = i;
        }
        if (indexI == "x") {
            indexX.push(i);
        }
    }

    if (indexO == -1 || indexX.length == 0) {
        return 0;
    }

    let jarakTerdekat = Infinity;
    for (let i = 0; i < indexX.length; i++) {
        const indexI = indexX[i];
        let jarak = Math.abs(indexO - indexI);

        if (jarak < jarakTerdekat) {
            jarakTerdekat = jarak;
        }
    }
    return jarakTerdekat;
}

console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
