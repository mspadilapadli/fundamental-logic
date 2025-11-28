// Dapatkan total pengeluaran
// kerjakan 2.js dengan bantuan jawaban dari program 1.js

function moneyManager(history) {
    // code here
    // console.log(history);
    let result = "";
    if (history === undefined) {
        result = `Data tidak valid`;
    } else if (history.length === 0) {
        result = `Data kosong`;
    } else {
        //reduce
        // let total = history.reduce((total, curr) => (total += curr), 0);
        let total = 0;
        for (let i = 0; i < history.length; i++) {
            // const indexI = history[i];
            total += history[i];
        }
        result = `Total pengeluaran hari ini adalah ${total} rupiah`;
    }
    return result;
}

console.log(moneyManager());
//Data tidak valid

console.log(moneyManager([]));
//Data kosong

console.log(moneyManager([5000, 2000, 3000, 4000, 1000]));
//Total pengeluaran hari ini adalah 15000 rupiah
