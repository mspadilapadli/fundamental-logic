// *1 manual
// function gameChecker(titleGame) {
//     // VARIABEL gameBoxes TIDAK BOLEH DIUBAH //

//     let gameBoxes = [
//         ["2020", "fifa", "pes", "football-manager", "winning-eleven"],
//         ["2021", "fifa", "football-manager", "nba"],
//         ["2022", "nba", "pes", "winning-eleven"],
//         ["2023", "winning-eleven", "nba", "fifa"],
//     ];
//     // you can only write your code here!

//     if (typeof titleGame != "string") return "invalid data";
//     if (titleGame.length == 0) return "masukkan game yang ingin di cari";

//     let inBox = [];

//     for (let i = 0; i < gameBoxes.length; i++) {
//         const indexI = gameBoxes[i];
//         for (let j = 0; j < indexI.length; j++) {
//             const indexJ = indexI[j];
//             if (indexJ == titleGame) {
//                 inBox.push(gameBoxes[i][0]);
//             }
//         }
//     }

//     let years = "";
//     for (let i = 0; i < inBox.length; i++) {
//         const year = inBox[i];
//         i == inBox.length - 1 ? (years += year) : (years += year + `, `);
//     }
//     // console.log(years);
//     return inBox.length == 0
//         ? `game ${titleGame} tidak ada di kardus manapun`
//         : `${titleGame} berjumlah ${inBox.length} dan berada pada box ${years}`;
// }

//* 2 build-in function forEach-includes
function gameChecker(titleGame) {
    // VARIABEL gameBoxes TIDAK BOLEH DIUBAH //

    let gameBoxes = [
        ["2020", "fifa", "pes", "football-manager", "winning-eleven"],
        ["2021", "fifa", "football-manager", "nba"],
        ["2022", "nba", "pes", "winning-eleven"],
        ["2023", "winning-eleven", "nba", "fifa"],
    ];
    // you can only write your code here!

    if (typeof titleGame != "string") return "invalid data";
    if (titleGame.length == 0) return "masukkan game yang ingin di cari";

    let foundBoxes = [];
    gameBoxes.forEach((box) => {
        if (box.includes(titleGame)) foundBoxes.push(box[0]);
    });

    return foundBoxes.length == 0
        ? `game ${titleGame} tidak ada di kardus manapun`
        : `${titleGame} berjumlah ${
              foundBoxes.length
          } dan berada pada box ${foundBoxes.join(", ")}`;
}

//* 3 build-in function filter & map
// function gameChecker(titleGame) {
//     // VARIABEL gameBoxes TIDAK BOLEH DIUBAH //

//     let gameBoxes = [
//         ["2020", "fifa", "pes", "football-manager", "winning-eleven"],
//         ["2021", "fifa", "football-manager", "nba"],
//         ["2022", "nba", "pes", "winning-eleven"],
//         ["2023", "winning-eleven", "nba", "fifa"],
//     ];
//     // you can only write your code here!

//     if (typeof titleGame != "string") return "invalid data";
//     if (titleGame.length == 0) return "masukkan game yang ingin di cari";

//     let foundBoxes = gameBoxes
//         .filter((box) => box.includes(titleGame))
//         .map((box) => box[0]);

//     return foundBoxes.length == 0
//         ? `game ${titleGame} tidak ada di kardus manapun`
//         : `${titleGame} berjumlah ${
//               foundBoxes.length
//           } dan berada pada box ${foundBoxes.join(", ")}`;
// }
// TEST CASES
console.log(gameChecker("fifa")); // fifa berjumlah 3 dan berada pada box 2020, 2021, 2023
console.log(gameChecker("pes")); // pes berjumlah 2 dan berada pada box 2020, 2022
console.log(gameChecker("winning-eleven")); // winning-eleven berjumlah 3 dan berada pada box 2020, 2022, 2023
console.log(gameChecker("dota")); // game dota tidak ada di kardus manapun
console.log(gameChecker("")); // masukkan game yang ingin di cari
console.log(gameChecker()); // invalid data
console.log(gameChecker(20)); // invalid data
console.log(gameChecker(true)); // invalid data
console.log(gameChecker(false)); // invalid data
console.log(gameChecker(null)); // invalid data
