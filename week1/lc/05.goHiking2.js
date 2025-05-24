let id = "3888-A-0197621";
let totalMember = 10;
let price = "";
let totalTagihan = 0;
let citizen = "";
let result = "";

for (let x = 0; x < id.length; x++) {
    const indexX = id[x];
    if (indexX === "I") {
        citizen = "WNI";
    } else if (indexX === "A") {
        citizen = "WNA";
    }
}
//  citizen = id.includes("I") ? "WNI" : id.includes("A") ? "WNA" : ""; // build in function

//* with build in function includes
// if (id.includes("I")) {
//     citizen = "WNI";
// } else if (id.includes("A")) {
//     citizen = "WNA";
// }

if (!citizen) {
    result = "Anda tidak terdaftar";
} else {
    if (citizen === "WNI") {
        price = 20_000;
        totalTagihan = totalMember * price;
        if (totalMember > 20) {
            totalTagihan = totalMember * price;
            totalTagihan = totalTagihan - totalTagihan * (20 / 100);
        }
    } else if (citizen === "WNA") {
        price = 50_000;
        totalTagihan = totalMember * price;
        if (totalMember > 30) {
            totalTagihan = totalMember * price;
            totalTagihan = totalTagihan - totalTagihan * (20 / 100);
        }
    }
    result = `Karena anda adalah ${citizen}, maka tagihan untuk id ${id} adalah ${totalTagihan}`;
}

console.log(result);

// * 2
// function calculatePayment(id, totalMember) {
//     // Penentuan citizen
//     let citizen = "";
//     if (id.includes("I")) {
//         citizen = "wni";
//     } else if (id.includes("A")) {
//         citizen = "wna";
//     } else {
//         return "Anda tidak terdaftar";
//     }

//     // Perhitungan harga berdasarkan citizen
//     let pricePerPerson = citizen === "wni" ? 20000 : 50000;
//     let totalPrice = pricePerPerson * totalMember;

//     // Penerapan diskon jika memenuhi syarat
//     if (citizen === "wni" && totalMember > 20) {
//         totalPrice -= totalPrice * 0.2; // Diskon 20%
//     } else if (citizen === "wna" && totalMember > 30) {
//         totalPrice -= totalPrice * 0.2; // Diskon 20%
//     }

//     // Output hasil
//     return `Karena anda adalah ${citizen}, maka tagihan untuk id ${id} adalah ${Math.floor(
//         totalPrice
//     )}`;
// }

// // Test Cases
// console.log(calculatePayment("3888-I-0197621", 21));
// // Output: "Karena anda adalah wni, maka tagihan untuk id 3888-I-0197621 adalah 336000"

// console.log(calculatePayment("38880197-A-621", 10));
// // Output: "Karena anda adalah wna, maka tagihan untuk id 38880197-A-621 adalah 500000"

// console.log(calculatePayment("38880197621", 10));
// // Output: "Anda tidak terdaftar"
