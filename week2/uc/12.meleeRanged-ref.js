//  * 1 manual
function splitting(str) {
    //code
    let result = [];
    let hero = "";
    for (let i = 0; i < str.length; i++) {
        const el = str[i];
        if (el === ",") {
            result.push(hero);
            hero = "";
        } else {
            hero += el;
        }

        if (i === str.length - 1) {
            result.push(hero);
        }
    }
    return result;
}

function meleeRangedGrouping(str) {
    //code
    if (!str) return [];
    let result = [];
    let splited = splitting(str);
    let arrGroup = [];
    for (let i = 0; i < splited.length; i++) {
        const el = splited[i];
        let tempArr = [];
        let temp = "";
        for (let j = 0; j < el.length; j++) {
            const indexJ = el[j];

            // console.log(indexJ);
            if (indexJ === "-") {
                tempArr.push(temp);
                temp = "";
            } else {
                temp += indexJ;
            }
            if (j === el.length - 1) {
                tempArr.push(temp);
            }
        }
        arrGroup.push(tempArr);
    }

    let ranged = [];
    let melee = [];

    for (let i = 0; i < arrGroup.length; i++) {
        const indexI = arrGroup[i];
        for (let j = 0; j < indexI.length; j++) {
            const indexJ = indexI[j];

            if (indexJ == "Ranged") {
                ranged.push(indexI[0]);
            } else if (indexJ == "Melee") {
                melee.push(indexI[0]);
            }
        }
    }
    result.push(ranged, melee);
    return result;
}

// *2  with build in function + destruction

function meleeRangedGrouping(str) {
    if (str === "") return [];
    let result = [];
    let melee = [];
    let ranged = [];
    str.split(",").forEach((hero) => {
        [hero, type] = hero.split("-");
        if (type == "Ranged") {
            ranged.push(hero);
        } else if (type == "Melee") {
            melee.push(hero);
        }
    });

    result.push(ranged, melee);
    return result;
}

// TEST CASE

console.log(
    meleeRangedGrouping(
        "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
    )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
    meleeRangedGrouping(
        "Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged"
    )
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
