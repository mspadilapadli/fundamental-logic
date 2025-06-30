// * 1
function changeMe(arr) {
    if (arr.length == 0) console.log("");
    let obj = {
        firstName: "",
        lastName: "",
        gender: "",
        age: 0,
    };

    let currentYear = new Date().getFullYear();
    for (let i = 0; i < arr.length; i++) {
        const indexI = arr[i];
        let [firstName, lastName, gender, age] = indexI;
        let name = `${i + 1}. ${firstName} ${lastName}`;
        if (!age || age > currentYear) {
            age = "Invalid Birth Year";
        } else {
            age = currentYear - age;
        }

        obj.firstName = firstName;
        obj.lastName = lastName;
        obj.gender = gender;
        obj.age = age;
        console.log(name, obj);
    }
}

changeMe([
    ["Ogata", "Rizu", "female", 1998],
    ["John", "Doe", "male", 2000],
    ["John", "Doe", "male", 2027],
]);
changeMe([]);

// * 2 with return
function changeMe(arr) {
    if (arr.length == 0) return "";
    let result = [];
    let currentYear = new Date().getFullYear();
    for (let i = 0; i < arr.length; i++) {
        const indexI = arr[i];
        let obj = {
            firstName: indexI[0],
            lastName: indexI[1],
            gender: indexI[2],
            age: indexI[3],
        };

        if (!obj.age || obj.age > currentYear) {
            obj.age = "Invalid Birth Year";
        } else {
            obj.age = currentYear - obj.age;
        }

        let name = `${i + 1}. ${obj.firstName} ${obj.lastName} `;
        result.push(name, obj);
    }
    return result;
}

console.log(
    changeMe([
        ["Ogata", "Rizu", "female", 1998],
        ["John", "Doe", "male", 2000],
        ["John", "Doe", "male", 2027],
    ])
);
console.log(changeMe([]));
