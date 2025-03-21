// *1 manual split to array

function ganjilGenap(plat) {
    let platGanjil = 0;
    let platGenap = 0;
    // console.log(ganjilGenap("2341;3429;864;1309;1276")); //plat genap sebanyak 2 dan plat ganjil sebanyak 3

    if (!plat) {
        return plat == "" ? "plat tidak ditemukan" : "invalid data";
    } else {
        let arrPlat = [];
        let splitPlat = "";
        for (let i = 0; i < plat.length; i++) {
            const index = plat[i];
            if (index != ";") {
                splitPlat += index;
            }
            if (index === ";" || i === plat.length - 1) {
                arrPlat.push(splitPlat);
                splitPlat = "";
            }
        }

        console.log(arrPlat);
        for (let j = 0; j < arrPlat.length; j++) {
            const index = arrPlat[j];
            index % 2 == 0 ? platGenap++ : platGanjil++;
        }

        if (platGenap && platGanjil) {
            return `plat genap sebanyak ${platGenap} dan plat ganjil sebanyak ${platGanjil}`;
        } else if (!platGenap && platGanjil) {
            return `plat ganjil sebanyak ${platGanjil} dan plat genap tidak ditemukan`;
        } else if (platGenap && !platGanjil) {
            return `plat genap sebanyak ${platGenap} dan plat ganjil tidak ditemukan`;
        }
    }
}

console.log(ganjilGenap("2341;3429;864;1309;1276")); //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap("2347;3429;1305")); //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap("864;1308;1276;1432")); //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap("")); //plat tidak ditemukan
console.log(ganjilGenap()); //invalid data
// *2 with build in function (split())

function ganjilGenap2(plat) {
    let platGanjil = 0;
    let platGenap = 0;

    if (!plat) {
        return plat == "" ? "plat tidak ditemukan" : "invalid data";
    } else {
        plat.split(";").forEach((el) => {
            if (el % 2 == 0) {
                platGenap++;
            } else {
                platGanjil++;
            }
        });
        if (platGenap && platGanjil) {
            return `plat genap sebanyak ${platGenap} dan plat ganjil sebanyak ${platGanjil}`;
        } else if (!platGenap && platGanjil) {
            return `plat ganjil sebanyak ${platGanjil} dan plat genap tidak ditemukan`;
        } else if (platGenap && !platGanjil) {
            return `plat genap sebanyak ${platGenap} dan plat ganjil tidak ditemukan`;
        }
    }
}

// console.log(ganjilGenap2("2341;3429;864;1309;1276")); //plat genap sebanyak 2 dan plat ganjil sebanyak 3
// console.log(ganjilGenap2("2347;3429;1305")); //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
// console.log(ganjilGenap2("864;1308;1276;1432")); //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
// console.log(ganjilGenap2("")); //plat tidak ditemukan
// console.log(ganjilGenap2()); //invalid data

// *3
function ganjilGenap3(plat) {
    let platGanjil = 0;
    let platGenap = 0;

    if (plat == "") {
        return "plat tidak ditemukan";
    } else if (!plat) {
        return "invalid data";
    } else {
        for (let i = 0; i < plat.length; i++) {
            const index = plat[i];
            if (index === ";") {
                plat[i - 1] % 2 == 0 ? platGenap++ : platGanjil++;
            } else if (i === plat.length - 1) {
                plat[i] % 2 == 0 ? platGenap++ : platGanjil++;
            }
        }
        if (platGenap && platGanjil) {
            return `plat genap sebanyak ${platGenap} dan plat ganjil sebanyak ${platGanjil}`;
        } else if (!platGenap && platGanjil) {
            return `plat ganjil sebanyak ${platGanjil} dan plat genap tidak ditemukan`;
        } else if (platGenap && !platGanjil) {
            return `plat genap sebanyak ${platGenap} dan plat ganjil tidak ditemukan`;
        }
    }
}

// console.log(ganjilGenap3("2341;3429;864;1309;1276")); //plat genap sebanyak 2 dan plat ganjil sebanyak 3
// console.log(ganjilGenap3("2347;3429;1305")); //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
// console.log(ganjilGenap3("864;1308;1276;1432")); //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
// console.log(ganjilGenap3("")); //plat tidak ditemukan
// console.log(ganjilGenap2()); //invalid data
