let name = "";
let role = "member baru";
let birhtMonth = "Januari";

//basic logic 1
if (name) {
    if (role === "member baru") {
        if (birhtMonth === "Januari") {
            console.log(
                `Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 50%!`
            );
        } else {
            console.log(
                `Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`
            );
        }
    } else if (role === "member lama") {
        if (birhtMonth === "Januari") {
            console.log(
                `Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 30%!`
            );
        } else {
            console.log(
                `Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`
            );
        }
    } else {
        console.log(
            `Selamat datang di Bikilipik, ${name}. Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu.`
        );
    }
} else {
    console.log("Nama tidak boleh kosong !");
}

//basic logic 2
if (name) {
    if (birhtMonth === "Januari") {
        if (role === "member baru") {
            console.log(
                `Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 50%!`
            );
        } else if (role === "member lama") {
            console.log(
                `Selamat ${name}!. Anda berhak mendapatkan voucher diskon sebesar 30%!`
            );
        } else {
            console.log(
                `Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`
            );
        }
    } else {
        console.log(
            `Maaf ${name}, voucher diskon hanya untuk yang lahir di bulan Januari.`
        );
    }
} else {
    console.log("Nama tidak boleh kosong !");
}
