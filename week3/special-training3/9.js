/*
Buatlah sebuah function averageAge yang mencari rata-rata umur
input function ini ada 1 parameter
- arr (data array of object)

output dari function ini adalah number rata-rata umur dari semua orang yang ada
*/

function averageAge(arr) {
    //*manual
    // let totalAge = 0;
    // arr.forEach((user) => {
    //     totalAge += user.age;
    // });

    // return totalAge / arr.length;

    //* reduce()
    // return (
    //     arr.reduce((acc, curr) => {
    //         return acc + curr.age;
    //     }, 0) / arr.length
    // );

    //* one liner reduce()
    return arr.reduce((acc, { age }) => acc + age, 0) / arr.length;
}

let multiArr = [
    { id: 1, name: "Marco Tiger", age: 26 },
    { id: 2, name: "Acong Budiman", age: 52 },
    { id: 3, name: "Kris Evan", age: 36 },
    { id: 4, name: "Robert Downey", age: 46 },
];

console.log(averageAge(multiArr));
// 40
