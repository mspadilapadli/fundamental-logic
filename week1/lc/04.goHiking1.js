let money = 25000;
let destination = "Papua";

if (!destination) {
    console.log("Error! input tidak valid!");
} else if (destination === "Jawa") {
    if (money < 20_000) {
        console.log(
            `Dengan uang ${money}, kamu datap menuju gunung Ciremai dan Prau di pulau ${destination} `
        );
    } else {
        console.log(
            `Dengan uang ${money}, kamu datap menuju gunung Ciremai, Pra, Merbabu dan Semeru di pulau ${destination} `
        );
    }
} else if (destination == "Papua") {
    if (money < 20_000) {
        console.log(
            `Dengan uang ${money}, kamu datap menuju gunung Jayawijaya dan Mandala di pulau ${destination} `
        );
    } else {
        console.log(
            `Dengan uang ${money}, kamu datap menuju gunung Jayawijaya, Mandala, Yamin dan Sumatri di pulau ${destination} `
        );
    }
} else {
    console.log(`Pulau ${destination} belum terjangkau Go-Hiking!`);
}
