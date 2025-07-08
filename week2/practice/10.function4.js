const number1 = 103;
const number2 = 72;
const number3 = 189;

// Ketik sebuah function getMax untuk mendapatkan nilai maksimum dari ke-3 angka diatas dan sesuaikan kebutuhan parameternya
function getMax(num1, num2, num3) {
    // secara default , semua argument yang di passing ke function, akan di tampung di dalam variabel yang namanya arguments.
    max = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
        const indexArgument = arguments[i];
        if (max < indexArgument) {
            max = indexArgument;
        }
    }
    return max;
}
// Cetak "Nilai maksimum adalah __" (__ berisikan hasil dari function getMax);
// output : Nilai maksimum adalah 189
console.log(`Nilai maksimun adalah ${getMax(number1, number2, number3)}`);

// ======================================================

let maxAngka = getMax(number1, number2, number3);
console.log(`Nilai maksimum adalah ${maxAngka}`);

function maxValue(a, b, c) {
    let max = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
        const index = arguments[i];
        if (index > max) {
            max = index;
        }
    }
    return max;
}

console.log(maxValue(6, 3, 9));
