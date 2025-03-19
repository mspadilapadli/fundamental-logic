var exercise = "<>^v";
var userInput = "<";
let score = 0;
let percentage = 0;
let kategori = "";
let maxScore = exercise.length * 10;

if (exercise.length !== userInput.length) {
    console.log("Input yang anda masukkan tidak lengkap!");
} else {
    for (let i = 0; i < exercise.length; i++) {
        const indexI = exercise[i];
        for (let j = 0; j < userInput.length; j++) {
            if (indexI === userInput[i]) {
                score += 10;
                break;
            }
        }
    }
    percentage = Math.round((score / maxScore) * 100);

    if (percentage == 100) {
        kategori = "Perfect";
    } else if (percentage >= 80 && percentage <= 99) {
        kategori = "Great";
    } else if (percentage >= 60 && percentage <= 79) {
        kategori = "Good";
    } else if (percentage >= 0 && percentage <= 59) {
        kategori = "Bad";
    }
    console.log(
        `Anda mendapatkan score ${score}/${maxScore}. Persentase : ${percentage}%, Kategori : ${kategori}`
    );
}
