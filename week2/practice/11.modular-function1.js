function moneyManager(history) {
    //code here
    let result = "";
    if (history === undefined) {
        // if (!Array.isArray(history))
        result = `Data tidak valid`;
    } else if (history.length === 0) {
        result = `Data kosong`;
    } else {
        result = `Data valid`;
    }
    return result;
}

console.log(moneyManager());
//Data tidak valid

console.log(moneyManager([]));
//Data kosong

console.log(moneyManager([5000, 2000, 3000, 4000, 1000]));
//Data valid
