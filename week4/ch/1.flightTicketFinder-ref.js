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
// const passengers = [
//     ["andi travel", 7, "senin"],
//     ["budi travel", 4, "selasa"],
//     ["cindi travel", 1, "rabu"],
//     ["andi travel", 10, "kamis"],
// ];

// console.log(generateTravel(passengers));
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

// ===================================================== //

function getTicket(passengersGenerated, ticketsData) {
    // your code here
    let totalPrice = 0;

    passengersGenerated.forEach((order) => {
        for (let i = 0; i < ticketsData.length; i++) {
            const ticket = ticketsData[i];
            if (order.day == ticket.flight) {
                totalPrice = order.passenger * ticket.price;
            }
        }
        order.totalPrice = totalPrice;
    });

    return passengersGenerated;
}

// const passengers = [
//     {
//         travelAgent: "andi travel",
//         passenger: 7,
//         day: "senin",
//     },
//     {
//         travelAgent: "budi travel",
//         passenger: 4,
//         day: "selasa",
//     },
//     {
//         travelAgent: "cindi travel",
//         passenger: 1,
//         day: "rabu",
//     },
//     {
//         travelAgent: "andi travel",
//         passenger: 10,
//         day: "kamis",
//     },
// ];

// const tickets = [
//     {
//         flight: "senin",
//         price: 120000,
//     },
//     {
//         flight: "selasa",
//         price: 180000,
//     },
//     {
//         flight: "rabu",
//         price: 140000,
//     },
//     {
//         flight: "kamis",
//         price: 200000,
//     },
//     {
//         flight: "jumat",
//         price: 160000,
//     },
//     {
//         flight: "sabtu",
//         price: 220000,
//     },
// ];

// console.log(getTicket(passengers, tickets));
/*
        [
            {
                travelAgent: 'andi travel',
                passenger: 7,
                day: 'senin',
                totalPrice: 840000
            },
            {
                travelAgent: 'budi travel',
                passenger: 4,
                day: 'selasa',
                totalPrice: 720000
            },
            {
                travelAgent: 'cindi travel',
                passenger: 1,
                day: 'rabu',
                totalPrice: 140000
            },
            {
                travelAgent: 'andi travel',
                passenger: 10,
                day: 'kamis',
                totalPrice: 2000000
            }
        ]
    */

// ===================================================== //

function getReward(travelsData, ticketsBook) {
    // your code here

    let result = [];
    travelsData.forEach((travel) => {
        let flight = [],
            totalPassenger = 0,
            totalPrice = 0,
            reward = 0;
        ticketsBook.forEach((ticket) => {
            if (travel == ticket.travelAgent) {
                flight.push(ticket.day);
                totalPassenger += ticket.passenger;
                totalPrice += ticket.totalPrice;
            }
        });

        result.push({
            travelAgent: travel,
            flight,
            totalPrice,
            totalPassenger,
            reward:
                totalPassenger > 15 && totalPrice > 2_000_000
                    ? totalPrice * 0.2
                    : reward,
        });
    });

    return result;
}

const travels = ["andi travel", "cindi travel"];
const tickets = [
    {
        travelAgent: "andi travel",
        passenger: 7,
        day: "senin",
        totalPrice: 840000,
    },
    {
        travelAgent: "budi travel",
        passenger: 4,
        day: "selasa",
        totalPrice: 720000,
    },
    {
        travelAgent: "cindi travel",
        passenger: 1,
        day: "rabu",
        totalPrice: 140000,
    },
    {
        travelAgent: "andi travel",
        passenger: 10,
        day: "kamis",
        totalPrice: 2000000,
    },
];

console.log(getReward(travels, tickets));
/*
        [
            {
                travelAgent: 'andi travel',  
                flight: ['senin', 'kamis'],
                totalPrice: 2840000,
                totalPassengers: 17,
                reward: 568000
            },
            {
                travelAgent: 'cindi travel',
                flight: ['rabu']
                totalPrice: 140000
                totalPassenger: 1,
                reward: 0
            }
        ]
    */
