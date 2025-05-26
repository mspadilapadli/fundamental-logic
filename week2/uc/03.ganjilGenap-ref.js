function ganjilGenap(plat) {
    let ganjil = 0;
    let genap = 0;

    if (!plat) {
        return plat == "" ? `plat tidak ditemukan` : "invalid data";
    } else {
        // * build in function
        //   plat.split(";").forEach((plat) => {
        //       plat % 2 == 0 ? genap++ : ganjil++;
        //   });

        //* manual 1 with temp arr

        let splitPlat = [];
        let tempArr = "";
        for (let i = 0; i < plat.length; i++) {
            const el = plat[i];
            if (el === ";") {
                splitPlat.push(tempArr);
                tempArr = "";
            } else {
                tempArr += el;
            }

            if (i === plat.length - 1) {
                splitPlat.push(tempArr);
            }
        }
        splitPlat.forEach((el) => {
            el % 2 == 0 ? genap++ : ganjil++;
        });

        //*  manual 2
        //   for (let i = 0; i < plat.length; i++) {
        //       const el = plat[i];
        //       if (el === ";") {
        //           plat[i - 1] % 2 == 0 ? genap++ : ganjil++;
        //       }
        //       if (i === plat.length - 1) {
        //           el % 2 == 0 ? genap++ : ganjil++;
        //       }
        //   }

        //* manual 3
        //   let splitPlat = "";
        //   for (let i = 0; i < plat.length; i++) {
        //       const el = plat[i];
        //       if (el === ";") {
        //           splitPlat % 2 == 0 ? genap++ : ganjil++;
        //           splitPlat = "";
        //       } else {
        //           splitPlat += el;
        //       }

        //       if (i === plat.length - 1) {
        //           splitPlat % 2 == 0 ? genap++ : ganjil++;
        //       }
        //   }

        if (genap && ganjil) {
            return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`;
        } else if (genap && !ganjil) {
            return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`;
        } else if (!genap && ganjil) {
            return `plat ganjil sebnayak ${ganjil} dan plat genap tidak ditemukan`;
        }
    }
}

console.log(ganjilGenap("2341;3429;864;1309;1276")); //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap("2347;3429;1305")); //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap("864;1308;1276;1432")); //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap("")); //plat tidak ditemukan
console.log(ganjilGenap()); //invalid data
