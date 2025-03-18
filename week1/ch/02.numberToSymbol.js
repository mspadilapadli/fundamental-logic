let numbers = `1342`;
if (!numbers || isNaN(numbers)) {
    console.log(`Input bukanlah angka`);
} else {
    for (let i = 0; i < numbers.length; i++) {
        const indexI = +numbers[i];
        let symbol = "";
        if (indexI % 2 === 0) {
            for (let j = 0; j < indexI; j++) {
                symbol += "@";
            }
        } else {
            for (let j = 0; j < indexI; j++) {
                symbol += "#";
            }
        }
        let spesialCondition = indexI + +numbers[i - 1];
        if (spesialCondition >= 5) {
            symbol += "$";
        }
        console.log(symbol);
    }
}
