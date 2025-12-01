//* 1 manual tempObj
// function graduates(students) {
//     // you can only write your code here!
//     let result = {};

//     for (let i = 0; i < students.length; i++) {
//         const student = students[i];
//         const className = student.class;

//         let tempObj = {};
//         if (student.score > 75) {
//             if (!result[className]) {
//                 result[className] = [];
//             }
//             tempObj.name = student.name;
//             tempObj.score = student.score;

//             result[className].push(tempObj);
//         }
//     }

//     return result;
// }

//* 2 destruct
// function graduates(students) {
//     // you can only write your code here!
//     let result = {};

//     for (let i = 0; i < students.length; i++) {
//         const student = students[i];
//         let { name, score, class: className } = student;

//         if (!result[className]) {
//             result[className] = [];
//         }
//         if (score > 75) {
//             result[className].push({
//                 name: name,
//                 score: score,
//             });
//         }
//     }

//     return result;
// }

// //* 3 filter() - forEach()
// function graduates(students) {
//     // you can only write your code here!
//     let result = {};

//     students
//         .filter((student) => student.score > 75)
//         .forEach((student) => {
//             let { name, score, class: className } = student;

//             if (!result[className]) {
//                 result[className] = [];
//             }
//             result[className].push({
//                 name: name,
//                 score: score,
//             });
//         });

//     return result;
// }
//*4 reduce, fallback
// function graduates(students) {
//     return students.reduce((result, students) => {
//         if (students.score > 75) {
//             result[students.class] = result[students.class] || [];
//             result[students.class].push({
//                 name: students.name,
//                 score: students.score,
//             });
//         }
//         return result;
//     }, {});
// }

//* 5 reduce, param distruct, alias distruct, fallback,
function graduates(students) {
    return students.reduce((result, { name, score, class: className }) => {
        if (score > 75) {
            result[className] = result[className] || [];
            result[className].push({
                name,
                score,
            });
        }
        return result;
    }, {});
}

// TEST CASE 1
let input1 = [
    { name: "Dimitri", score: 90, class: "foxes" },
    { name: "Alexei", score: 85, class: "wolves" },
    { name: "Sergei", score: 74, class: "foxes" },
    { name: "Anastasia", score: 78, class: "wolves" },
];
console.log(graduates(input1));
// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

// TEST CASE 2
let input2 = [
    { name: "Rin", score: 100, class: "foxes" },
    { name: "Saber", score: 80, class: "wolves" },
    { name: "Gilgamesh", score: 30, class: "foxes" },
    { name: "Ishtar", score: 50, class: "wolves" },
];
console.log(graduates(input2));

// TEST CASE 3
let input3 = [
    { name: "Alexander", score: 100, class: "foxes" },
    { name: "Alisa", score: 76, class: "wolves" },
    { name: "Vladimir", score: 92, class: "foxes" },
    { name: "Albert", score: 71, class: "wolves" },
    { name: "Viktor", score: 80, class: "tigers" },
];
console.log(graduates(input3));
// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }

// TEST CASE 4
console.log(graduates([]));

//do not change the code below
module.exports = graduates;
