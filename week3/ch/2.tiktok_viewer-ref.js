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
            const qty = el[k + 1];
            //* manual
            for (let l = 0; l < listReward.length; l++) {
                const reward = listReward[l];
                let { name, point } = reward;
                if (item == name) {
                    tempPoint += point * qty;
                    break;
                }
            }
            //* find()
            // let rewardInfo = listReward.find((reward) => reward.name == item)
            // if(rewardInfo) tempPoint += rewardInfo.point * qty
        }
        result.push(tempPoint);
    }

    return result;
}

// console.log(
//     calculateTotalPoint([
//         ["Rocket", 11, "Chocolate", 13, "Ferrari", 1],
//         ["Diamond", 9, "Heart", 20, "Ferrari", 7, "Star", 30],
//         ["Diamond", 1, "Star", 5],
//     ])
// );
// [ 4200, 6600, 275 ]

//===//

function viewTime(data) {
    //Your code here
    //* manual
    let result = [];
    let wastedTime;
    let videoDuration = 45;
    data.forEach((user) => {
        wastedTime = (user.viewers * videoDuration) / 60;
        result.push(wastedTime);
    });

    return result;
    //* map()
    return data.map((user) => (user.viewers * 45) / 60);
}

// console.log(
//     viewTime([
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
// [ 540, 1050, 24 ]

// ==== //
function tiktokRank(data) {
    // Your code here
    if (!data) return `Insert data`;
    if (data.length <= 0) return [];
    let result = {};

    let convertedData = convertData(data);
    let totalPoint = calculateTotalPoint(convertedData);
    let timeView = viewTime(data);
    let userRank = "";
    for (let i = 0; i < totalPoint.length; i++) {
        const point = totalPoint[i];
        const time = timeView[i];
        if (point > 5000 && time > 1000) {
            userRank = "Platinum";
        } else if (
            point >= 2500 &&
            point <= 5000 &&
            time >= 500 &&
            time <= 1000
        ) {
            userRank = "Gold";
        } else {
            userRank = "Bronze";
        }

        if (!result[userRank]) {
            result[userRank] = [];
        }
        result[userRank].push(data[i].user);
    }
    return result;
}

// TEST CASE
console.log(tiktokRank([])); // [];
console.log(tiktokRank()); // Insert data

let data = [
    {
        song: "Papi Chulo",
        user: "Chikakiku",
        viewers: 720,
        rewards: [
            ["Rocket", 11],
            ["Chocolate", 13],
            ["Ferrari", 1],
        ],
    },
    {
        song: "Saranghae",
        user: "Lisa Stream",
        viewers: 1400,
        rewards: [
            ["Diamond", 9],
            ["Heart", 20],
            ["Ferrari", 7],
            ["Star", 30],
        ],
    },
    {
        song: "Mipan Zuzuzu",
        user: "Mr Jack",
        viewers: 32,
        rewards: [
            ["Diamond", 1],
            ["Star", 5],
        ],
    },
    {
        song: "Savage Megan",
        user: "12yes",
        viewers: 980,
        rewards: [
            ["Star", 6],
            ["Diamond", 3],
            ["Rocket", 5],
            ["Heart", 2],
            ["Ferrari", 1],
            ["Chocolate", 4],
        ],
    },
    {
        song: "Lottery",
        user: "dj_cuap",
        viewers: 1240,
        rewards: [
            ["Star", 30],
            ["Heart", 10],
            ["Chocolate", 2],
            ["Ferrari", 4],
        ],
    },
    {
        song: "Roses",
        user: "Dior777",
        viewers: 560,
        rewards: [
            ["Rocket", 3],
            ["Star", 10],
            ["Diamond", 5],
            ["Heart", 4],
        ],
    },
];

console.log(tiktokRank(data));
/*
{
  Gold: [ 'Chikakiku', '12yes', 'dj_cuap' ],
  Platinum: [ 'Lisa Stream' ],
  Bronze: [ 'Mr Jack', 'Dior777' ]
}
*/
