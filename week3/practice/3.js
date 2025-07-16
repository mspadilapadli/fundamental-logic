let animals = [
    "kambing",
    "ayam",
    "ayam",
    "kambing",
    "ayam",
    "ayam",
    "kambing",
    "Ayam",
];

// buatlah sebuah fungsi dengan nama countAnimals yang akan mengembalikan sebuah objek berisikan key value yang dinamis yang tiap valuenya berisi jumlah dari tiap-tiap hewan yang berada di dalam array

/*
output:
{ kambing: 3, ayam: 4, Ayam: 1 }
*/

function countAnimals(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i++) {
        const indexI = arr[i];
        if (result[indexI] === undefined) {
            result[indexI] = 1;
        } else {
            result[indexI]++;
        }
    }

    return result;
}
console.log(countAnimals(animals));
