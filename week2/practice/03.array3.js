const numbers = [1, 4, 2, 1, 51, 67, 8, 32, 21, 65];
// Ketik sebuah function getMax untuk mendapatkan nilai maksimum dari kumpulan angka diatas dan sesuaikan kebutuhan parameternya
function getMax(arrOfNumbers) {
    let max = arrOfNumbers[0]; /* -Infinity */
    for (let i = 0; i < arrOfNumbers.length; i++) {
        const indexArrNumber = arrOfNumbers[i];
        if (max < indexArrNumber) {
            max = indexArrNumber;
        }
    }
    return max;
}
let randomNumbers = getMax(numbers);
console.log(`Nilai maksimum adalah ${randomNumbers}`);
// Cetak "Nilai maksimum adalah __" (__ berisikan hasil dari function getMax);
// output : Nilai maksimum adalah 67
