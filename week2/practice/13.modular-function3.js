// Buatlah modular functions dengan menggunakan moneyManager function dan totalExpenses function
// kerjakan 3.js dengan bantuan jawaban dari program 2.js

//Catatan:
//Dalam kasus ini, totalExpenses function berfungsi untuk memberikan total pengeluaran saja
//totalExpenses function tidak digunakan untuk melakukan validasi 'Data tidak valid' atau 'Data kosong' atau memberikan output kalimat 'Total pengeluaran hari ini adalah'

function totalExpenses(history) {
    //code here

    // return total = history.reduce((total, curr) => (total += curr), 0);
    let total = 0;
    for (let i = 0; i < history.length; i++) {
        total += history[i];
    }
    return total;
}

function moneyManager(history) {
    //code here
    let result = "";
    if (history === undefined) {
        result = `Data tidak valid`;
    } else if (history.length === 0) {
        result = `Data kosong`;
    } else {
        let subfunc = totalExpenses(history);
        result = `Total pengeluaran hari ini adalah ${subfunc}`;
    }
    return result;
}

console.log(moneyManager());
//Data tidak valid

console.log(moneyManager([]));
//Data kosong

console.log(moneyManager([5000, 2000, 3000, 4000, 1000]));
//Total pengeluaran hari ini adalah 15000 rupiah
