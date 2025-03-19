let angka = 33;

// //* while
while (angka) {
    angka > 10 ? (angka += 1) : angka;
    let strAngka = angka.toString();
    let palindromeAngka = "";
    //no buildin function
    for (let i = 0; i < strAngka.length; i++) {
        palindromeAngka += strAngka[strAngka.length - 1 - i];
    }
    //  palindromeAngka = angka.toString().split("").reverse().join(""); //with buildin function
    if (strAngka === palindromeAngka) {
        console.log(angka);
        break;
    }
    angka++;
}

// * for
let angka2 = 33;
angka2 >= 10 ? (angka2 += 1) : angka2;
for (let i = angka2; ; i++) {
    let strAngka = i.toString();
    let palindromeNumber = i.toString().split("").reverse().join("");
    if (strAngka === palindromeNumber) {
        console.log(i);
        break;
    }
}
