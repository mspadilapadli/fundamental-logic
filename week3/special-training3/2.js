/* time : 
1. 9 m
2. 3m
3. 3m

Buatlah sebuah function pushData yang menerima 3 parameter
- arr bertipe data array 
- value merupakan data yang akan diinputkan ke dalam array
- index merupakan data number yang merupakan index tempat value diletakkan

function akan menghasilkan sebuah data array baru dengan persyaratan sbb
- apabila index lebih besar dari index terakhir data arr, maka value dimasukkan di akhir array
- apabila index lebih kecil dari 0, maka value dimasukkan di depan array (index ke 0)
- jika tidak termasuk ke dalam 2 kondisi di atas, maka value akan di masukkan sesuai index yang ditentukan
*/
// *V1 : funtion yang masih menggunakan kombinasi arr bawaan dan arr baru,
// * arr bawaan untuk push dan ushift , dan arr baru untuk sisipan value di antara length
function pushData(arr, value, index) {
    // console.log(arr.length);
    let result = [];

    if (index < 0) {
        arr.unshift(value);
        return arr;
    } else if (index >= arr.lenght) {
        arr.push(value);
        return arr;
    } else {
        for (let i = 0; i < arr.length; i++) {
            const indexi = arr[i];
            if (i === index) {
                result.push(value);
            }
            result.push(indexi);
        }
        return result;
    }
}
// * V2 : hanya menggunakan arr baru saja.
function pushDataV2(arr, value, index) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        const indexi = arr[i];
        if (i === index) {
            result.push(value);
        }
        result.push(indexi);
    }

    if (index < 0) {
        result.unshift(value);
    }
    if (index >= arr.lenght) {
        result.push(value);
    }
    return result;
}
//* 3
function pushData(arr, value, index) {
    let result = [];
    arr.forEach((str, idx) => {
        if (idx == index) {
            result.push(value);
        }
        result.push(str);
    });

    if (index <= 0) {
        result.unshift(value);
    }
    if (index >= arr.length) {
        result.push(value);
    }

    return result;
}

console.log(pushData(["a", "b", "c", "d", "e"], "f", 3)); // ['a', 'b', 'c', 'f', 'd', 'e']
console.log(pushData(["a", "b", "c", "d", "e"], 10, 5)); // ['a', 'b', 'c', 'd', 'e', 10]
console.log(pushData(["a", "b", "c", "d", "e"], false, 2)); // ['a', 'b', false, 'c', 'd', 'e']
console.log(pushData(["a", "b", "c", "d", "e"], "160", -1)); // ['160', 'a', 'b', 'c', 'd', 'e']
console.log(`\n`);
console.log(pushDataV2(["a", "b", "c", "d", "e"], "f", 3)); // ['a', 'b', 'c', 'f', 'd', 'e']
console.log(pushDataV2(["a", "b", "c", "d", "e"], 10, 5)); // ['a', 'b', 'c', 'd', 'e', 10]
console.log(pushDataV2(["a", "b", "c", "d", "e"], false, 2)); // ['a', 'b', false, 'c', 'd', 'e']
console.log(pushDataV2(["a", "b", "c", "d", "e"], "160", -1)); // ['160', 'a', 'b', 'c', 'd', 'e']
