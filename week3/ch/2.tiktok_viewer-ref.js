function convertData(data) {
    //Your code here
    //*manual
    let result = [];
    data.forEach((item) => {
        let temp = [];
        for (let i = 0; i < item.rewards.length; i++) {
            const el = item.rewards[i];
            [reward, qty] = el;
            temp.push(reward, qty);
        }
        result.push(temp);
    });
    return result;

    //* map()
    //  return data.map((list) => {
    //      return list.rewards.flat();
    //  });
}

// console.log(
//     convertData([
//         {
//             song: "Papi Chulo",
//             user: "Chikakiku",
//             viewers: 720,
//             rewards: [
//                 ["Rocket", 11],
//                 ["Chocolate", 13],
//                 ["Ferrari", 1],
//             ],
//         },
//         {
//             song: "Saranghae",
//             user: "Lisa Stream",
//             viewers: 1400,
//             rewards: [
//                 ["Diamond", 9],
//                 ["Heart", 20],
//                 ["Ferrari", 7],
//                 ["Star", 30],
//             ],
//         },
//         {
//             song: "Mipan Zuzuzu",
//             user: "Mr Jack",
//             viewers: 32,
//             rewards: [
//                 ["Diamond", 1],
//                 ["Star", 5],
//             ],
//         },
//     ])
// );

/*
EXPECTED OUTPUT
[
  [ 'Rocket', 11, 'Chocolate', 13, 'Ferrari', 1 ],        
  [ 'Diamond', 9, 'Heart', 20, 'Ferrari', 7, 'Star', 30 ],
  [ 'Diamond', 1, 'Star', 5 ]
]
*/

// === //
function calculateTotalPoint(data) {
    let listReward = [
        { name: "Rocket", point: 100 },
        { name: "Chocolate", point: 200 },
        { name: "Ferrari", point: 500 },
        { name: "Heart", point: 50 },
        { name: "Diamond", point: 150 },
        { name: "Star", point: 25 },
    ];
    //Your code here

    let result = [];
    for (let i = 0; i < data.length; i++) {
        let tempPoint = 0;
        const el = data[i];
        for (let k = 0; k < el.length; k += 2) {
            const item = el[k];
            for (let l = 0; l < listReward.length; l++) {
                const reward = listReward[l];
                let { name, point } = reward;

                if (item == name) {
                    //   console.log(point, el[k + 1]);
                    tempPoint += point * el[k + 1];
                    break;
                }
            }
        }
        result.push(tempPoint);
    }

    return result;
}

console.log(
    calculateTotalPoint([
        ["Rocket", 11, "Chocolate", 13, "Ferrari", 1],
        ["Diamond", 9, "Heart", 20, "Ferrari", 7, "Star", 30],
        ["Diamond", 1, "Star", 5],
    ])
);
// [ 4200, 6600, 275 ]
