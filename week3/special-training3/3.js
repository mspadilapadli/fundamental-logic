/* timre :
1. 6m 
2. 
3.
Buatlah sebuah function generateArrayOfObject yang merubah data array multidimensi menjadi array of object


*/

function generateArrayOfObject(arr) {
    let result = [];
    //*manual
    // arr.forEach((el) => {
    //     let obj = {};
    //     obj.id = el[0];
    //     obj.name = `${el[1]} ${el[2]}`;
    //     obj.age = new Date().getFullYear() - el[3];

    //     result.push(obj);
    // });

    //* desturct
    // arr.forEach((el) => {
    //     let obj = {};
    //     let [id, firstName, lastName, age] = el;
    //     obj.id = id;
    //     obj.name = `${firstName} ${lastName}`;
    //     obj.age = new Date().getFullYear() - age;

    //     result.push(obj);
    // });

    //*  kita masukkan ke dalam variabel, insight nya agar lebih mudah di gunakan untuk komputasi yang lebih rumit kedepannya.
    // arr.forEach((el) => {
    //     let [id, firstName, lastName, age] = el;
    //     let obj = {
    //         id,
    //         name: `${firstName} ${lastName}`,
    //         age: new Date().getFullYear() - age,
    //     };
    //     result.push(obj);
    // });

    // * base on result

    // arr.forEach((el) => {
    //     let [id, firstName, lastName, age] = el;

    //     result.push({
    //         id,
    //         name: `${firstName} ${lastName}`,
    //         age: new Date().getFullYear() - age,
    //     });
    // });

    // return result;
    //*maping & param distruct
    // return arr.map(([id, firstName, lastName, age]) => {  //error karena =>{} dibaca sebagai body block di js
    //         id,
    //         name: `${firstName} ${lastName}`,
    //         age: new Date().getFullYear() - age,
    //     });

    //tambahkan () untuk membungkus objnya
    return arr.map(([id, firstName, lastName, age]) => ({
        id,
        name: `${firstName} ${lastName}`,
        age: new Date().getFullYear() - age,
    }));
    //  Intinya
    // { ... } setelah arrow → block
    // ({...}) setelah arrow → object literal
}

let multiArr = [
    [1, "Marco", "Tiger", 1996],
    [2, "Acong", "Budiman", 1970],
    [3, "Kris", "Evan", 1986],
    [4, "Robert", "Downey", 1976],
];

console.log(generateArrayOfObject(multiArr));
// [
//     { id: 1, name: 'Marco Tiger', age: 26 },
//     { id: 2, name: 'Acong Budiman', age: 52 },
//     { id: 3, name: 'Kris Evan', age: 36 },
//     { id: 4, name: 'Robert Downey', age: 46 }
// ]
