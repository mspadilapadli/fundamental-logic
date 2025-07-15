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

console.log(
    convertData([
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
    ])
);

/*
EXPECTED OUTPUT
[
  [ 'Rocket', 11, 'Chocolate', 13, 'Ferrari', 1 ],        
  [ 'Diamond', 9, 'Heart', 20, 'Ferrari', 7, 'Star', 30 ],
  [ 'Diamond', 1, 'Star', 5 ]
]
*/
