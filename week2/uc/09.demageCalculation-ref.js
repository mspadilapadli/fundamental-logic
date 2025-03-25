function attack(demage) {
    return demage - 2;
}

function demageCalculation(numberOfAttacks, demagePerAttack) {
    return numberOfAttacks * attack(demagePerAttack);
}

// TEST CASE
console.log(demageCalculation(9, 25)); // 207

console.log(demageCalculation(10, 4)); // 20

console.log(demageCalculation(5, 20)); // 90
