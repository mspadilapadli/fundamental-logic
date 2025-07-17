function generateTravel(passengersData) {
    let result = [];

    passengers.forEach((travel) => {
        let [travelName, qty, day] = travel;
        result.push({
            travelAgent: travelName,
            passanger: qty,
            day,
        });
    });

    return result;
}
const passengers = [
    ["andi travel", 7, "senin"],
    ["budi travel", 4, "selasa"],
    ["cindi travel", 1, "rabu"],
    ["andi travel", 10, "kamis"],
];

console.log(generateTravel(passengers));
/*
        [
            {
                travelAgent: 'andi travel', 
                passenger: 7,
                day: 'senin'
            },
            {
                travelAgent: 'budi travel', 
                passenger: 4,
                day: 'selasa'
            },
            {
                travelAgent: 'cindi travel',
                passenger: 1,
                day: 'rabu'
            },
            {
                travelAgent: 'andi travel', 
                passenger: 10,
                day: 'kamis'
            }
        ]
    */
