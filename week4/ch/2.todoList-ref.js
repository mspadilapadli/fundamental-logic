// const todos = [
//     "Buy car signal light|16/1/2021",
//     "Return bycycle brake|17/1/2021",
//     "Buy A4 Paper",
//     "Install Garage Shed|18/1/2021",
//     "Service PC|18/1/2021",
//     "Fix rooftops|19/1/2021",
//     "Watching TV series|19/1/2021",
//     "Buy new toys|19/1/2021",
//     "Playing Mobile Legends",
// ];

// function splitTodos(todos) {
// code here
//* manual v1
// let result = [];
// for (let i = 0; i < todos.length; i++) {
//     let tempArr = [];
//     let temp = "";
//     const todo = todos[i];
//     for (let j = 0; j < todo.length; j++) {
//         const char = todo[j];
//         if (char === "|") {
//             tempArr.push(temp);
//             temp = "";
//         } else {
//             temp += char;
//         }
//     }
//     tempArr.push(temp);
//     tempArr.length == 2 ? tempArr : tempArr.push("");

//     result.push(tempArr);
// }

//* manual v2 with flaging foundSeparator
//  for (let i = 0; i < todos.length; i++) {
//      const indexTodo = todos[i];
//      let tempArr = [];
//      let task = "";
//      let date = "";
//      let foundSeparator = false;
//      for (let j = 0; j < indexTodo.length; j++) {
//          const indexChar = indexTodo[j];
//          if (indexChar === "|") {
//              foundSeparator = true;
//          } else {
//              if (foundSeparator) {
//                  date += indexChar;
//              } else {
//                  task += indexChar;
//              }
//          }
//      }
//      tempArr.push(task, date);
//      result.push(tempArr);
//  }

// return result;

//* map()
//     return todos.map((item) => {
//         let part = item.split("|");
//         return part.length == 2 ? part : part.concat("");
//     });
// }

//* default value disctructing one liner (not recomend , cuz array distruct to global scope)
// const splitTodos = (todos) =>
//  todos.map((item) => (([task, date = ""] = item.split("|")), [task, date])); //date=""

//*best default value disctructing
const splitTodos = (todos) =>
    todos.map((item) => {
        const [task, date = ""] = item.split("|");
        return [task, date];
    });

// console.log(splitTodos(todos));
/*
  [
    ['Buy car signal light', '16/1/2021'],
    ['Return bycycle brake', '17/1/2021'],
    ['Buy A4 Paper', ''],
    ['Install Garage Shed', '18/1/2021'],
    ['Service PC', '18/1/2021'],
    ['Fix rooftops', '19/1/2021'],
    ['Watching TV series', '19/1/2021'],
    ['Buy new toys', '19/1/2021'],
    ['Playing Mobile Legends', '']
  ]
 */

//*================================================================================//

// const todos = [
//     ["Buy car signal light", "16/1/2021"],
//     ["Return bycycle brake", "17/1/2021"],
//     ["Buy A4 Paper", ""],
//     ["Install Garage Shed", "18/1/2021"],
//     ["Service PC", "18/1/2021"],
//     ["Fix rooftops", "19/1/2021"],
//     ["Watching TV series", "19/1/2021"],
//     ["Buy new toys", "19/1/2021"],
//     ["Playing Mobile Legends", ""],
// ];
// function filterTodos(todos) {
//     //* manual
//     let result = [];
//     todos.forEach((todo) => {
//         let [task, date] = todo;
//         if (date) result.push(todo);
//     });

//     return result;

// }

//* one liner filter()
const filterTodos = (todos) => todos.filter(([task, date]) => date);

// console.log(filterTodos(todos));
/*
  [
    ['Buy car signal light', '16/1/2021'],
    ['Return bycycle brake', '17/1/2021'],
    ['Install Garage Shed', '18/1/2021'],
    ['Service PC', '18/1/2021'],
    ['Fix rooftops', '19/1/2021'],
    ['Watching TV series', '19/1/2021'],
    ['Buy new toys', '19/1/2021']
  ]
 */

//*================================================================================//

// const todos = [
//     ["Buy car signal light", "16/7/2025"],
//     ["Return bycycle brake", "17/7/2025"],
//     ["Install Garage Shed", "18/7/2025"],
//     ["Service PC", "18/7/2025"],
//     ["Fix rooftops", "19/7/2025"],
//     ["Watching TV series", "19/7/2025"],
//     ["Buy new toys", "19/7/2025"],
// ];

function todoStatus(todos, date) {
    // your code here
    let result = [...todos];
    // *compare day
    // result.forEach((todo) => {
    //     let [task, dueDate] = todo;
    //     let taskDate = `${dueDate[0]}${dueDate[1]}`;
    //     console.log(taskDate, date);
    //     if (taskDate > date) todo.push("pending");
    //     else if (taskDate < date) todo.push("done");
    //     else todo.push("ongoing");
    // });
    // return result;

    //* compare date
    return todos.map((todo) => {
        let [task, dueDateStr] = todo;
        const [day, month, year] = dueDateStr.split("/").map(Number);
        // UTC time akan mundur 1 hari jika waktu local
        let dueDate = new Date(year, month - 1, day);
        let today = new Date(year, month - 1, date);
        // console.log(day, month, year, today);

        let status;
        if (today > dueDate) status = "done";
        //gunakan getTime() aagar waktu jam nya sama dan true, jika tidak maka hasilnya akan selalu false karena jam menit detiknya berbeda
        else if (today.getTime() == dueDate.getTime()) status = "ongoing";
        // atay bisa menggukaan pendekatan perbandingan tanpa jam
        // (dueDate.getDate() === today.getDate() &&
        // dueDate.getMonth() === today.getMonth() &&
        // dueDate.getFullYear() === today.getFullYear())
        else status = "pending";
        return [task, dueDateStr, status];
    });
}

// console.log(todoStatus(todos, 18));

/**
 * [
    ['Buy car signal light', '16/1/2021', 'done'],
    ['Return bycycle brake', '17/1/2021', 'done'],
    ['Install Garage Shed', '18/1/2021', 'ongoing'],
    ['Service PC', '18/1/2021', 'ongoing'],
    ['Fix rooftops', '19/1/2021', 'pending'],
    ['Watching TV series', '19/1/2021', 'pending'],
    ['Buy new toys', '19/1/2021', 'pending']
   ]
 */
//*================================================================================//

// const todos = [
//     ["Buy car signal light", "16/1/2021", "done"],
//     ["Return bycycle brake", "17/1/2021", "done"],
//     ["Install Garage Shed", "18/1/2021", "ongoing"],
//     ["Service PC", "18/1/2021", "ongoing"],
//     ["Fix rooftops", "19/1/2021", "pending"],
//     ["Watching TV series", "19/1/2021", "pending"],
//     ["Buy new toys", "19/1/2021", "pending"],
// ];

// function todoStatistic(todos) {
//     // your code here
//     let result = {};
//     todos.forEach((todo) => {
//         let [task, date, status] = todo;
//         if (!result[status]) {
//             result[status] = 0;
//         }
//         result[status]++;
//     });
//     return result;
// }

//*  reduce()
// const todoStatistic = (todos) =>
//     todos.reduce((result, [task, date, status]) => {
//         result[status] = (result[status] || 0) + 1;
//         return result;
//     }, {});

//* one liner reduce()
const todoStatistic = (todos) =>
    todos.reduce(
        (result, [, , status]) => (
            (result[status] = (result[status] || 0) + 1), result
        ),
        {}
    );
// console.log(todoStatistic(todos));
/**
 * {
 *   done: 2,
 *   ongoing: 2,
 *   pending: 3
 * }
 */

//*================================================================================//
const todos = [
    "Buy car signal light|16/1/2021",
    "Return bycycle brake|17/1/2021",
    "Buy A4 Paper|",
    "Install Garage Shed|18/1/2021",
    "Service PC|18/1/2021",
    "Fix rooftops|19/1/2021",
    "Watching TV series|19/1/2021",
    "Buy new toys|19/1/2021",
    "Playing Mobile Legends|",
];

// function generateTodos(todos, date) {
//     let result = { statistic: "", todo: [] };
//     let splitedTask = splitTodos(todos);
//     let filteredTask = filterTodos(splitedTask);
//     let statusTask = todoStatus(filteredTask, date);
//     let statisticTask = todoStatistic(statusTask);

//     statusTask.forEach((todo) => {
//         let [task, date, status] = todo;
//         result.todo.push({
//             name: task,
//             dueDate: date,
//             status,
//         });
//     });

//     result.statistic = statisticTask;

//     return result;
// }

// *2 map() - Implicit return object literal
const generateTodos = (todos, date) => {
    const splitedTask = splitTodos(todos);
    const filteredTask = filterTodos(splitedTask);
    const statusTask = todoStatus(filteredTask, date);

    const statistic = todoStatistic(statusTask);
    console.log(statistic);
    //* Implicit return object literal
    const todosObj = statusTask.map(([name, dueDate, status]) => ({
        name,
        dueDate,
        status,
    }));
    return { statistic, todos: todosObj };
};

console.log(generateTodos(todos, 18));
/**
 * {
    statistic: { done: 2, ongoing: 2, pending: 3 },
    todos: [
        {
            name: 'Buy car signal light',
            dueDate: '16/1/2021',
            status: 'done'
        },
        {
            name: 'Return bycycle brake',
            dueDate: '17/1/2021',
            status: 'done'
        },
        {
            name: 'Install Garage Shed',
            dueDate: '18/1/2021',
            status: 'ongoing'
        },
        { name: 'Service PC', dueDate: '18/1/2021', status: 'ongoing' },
        { name: 'Fix rooftops', dueDate: '19/1/2021', status: 'pending' },
        {
            name: 'Watching TV series',
            dueDate: '19/1/2021',
            status: 'pending'
        },
        { name: 'Buy new toys', dueDate: '19/1/2021', status: 'pending' }
    ]
  }
 */
