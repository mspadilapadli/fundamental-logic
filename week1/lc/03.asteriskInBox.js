let row = 1;
let coordinate = "11";
for (let i = 1; i <= row; i++) {
    let result = "";
    for (let j = 1; j <= 5; j++) {
        if (i === +coordinate[0] && j === +coordinate[1]) {
            result += ` *`;
        } else {
            result += ` #`;
        }
    }
    console.log(result);
}
