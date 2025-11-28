let numbers = `1234`;
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
        // console.log(spesialCondition);
        if (spesialCondition >= 5) {
            symbol += "$";
        }
        console.log(symbol);
    }
}

// * v2
if (!numbers || isNaN(numbers)) {
    console.log(`Input bukanlah angka`);
} else {
    for (let i = 0; i < numbers.length; i++) {
        const indexI = +numbers[i];
        let sym = indexI % 2 == 0 ? "@" : "#";
        let symbol = "";

        for (let j = 0; j < indexI; j++) {
            symbol += sym;
        }

        if (indexI > 0 && indexI + +numbers[i - 1] >= 5) {
            symbol += "$";
        }

        console.log(symbol);
    }
}
