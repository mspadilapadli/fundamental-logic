//  * 1
// function tentukanDeretGeometri(angka) {
//     if (angka.length == 1) return true;

//     let selisih = angka[1] / angka[0];

//     for (let i = 0; i < angka.length - 1; i++) {
//         const indexI = angka[i];
//         if (angka[i + 1] / indexI !== selisih) {
//             return false;
//         }
//     }
//     return true;
// }

// * 2 with build in function

function tentukanDeretGeometri(angka) {
    if (angka.length <= 1) return true;
    let rasio = angka[1] / angka[0];
    // slice(1) untuk skip angka pertama , karena index pertama tidak perlu dicek
    return angka.slice(1).every((el, index) => el / angka[index] === rasio);
}

//*3 handle last index in every tanpa slice

// function tentukanDeretGeometri(angka) {
//     if (angka.length <= 1) return true;
//     let rasio = angka[1] / angka[0];

//     // without slice
//     return angka.every((el, index) => {
//         // skip last index agat tidak NaN
//         if (index === angka.length - 1) return true;
//         return angka[index + 1] / el === rasio;
//     });
// }

/* note
kenapa tidak menggukana forEach :
forEach() bukan pilihan terbaik untuk masalah ini karena:
1. forEach() tidak bisa dihentikan dengan return false
   - every() bisa berhenti lebih awal begitu ditemukan angka yang tidak sesuai.
   - forEach() akan selalu menelusuri seluruh elemen, bahkan jika sudah jelas bukan deret geometri.
2. forEach() tidak mengembalikan nilai boolean langsung
   - every() otomatis mengembalikan true atau false, yang sesuai dengan kebutuhan fungsi.
   - forEach() hanya menjalankan callback dan tidak bisa langsung mengembalikan hasil evaluasi.
*/
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretGeometri([3])); //true ,tidak akan masuk ke ekskusi for, jadi langsung return true
