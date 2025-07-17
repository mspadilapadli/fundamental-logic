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

function splitTodos(todos) {
    // code here
    //* manual v1
    let result = [];
    for (let i = 0; i < todos.length; i++) {
        let tempArr = [];
        let temp = "";
        const todo = todos[i];
        for (let j = 0; j < todo.length; j++) {
            const char = todo[j];
            if (char === "|") {
                tempArr.push(temp);
                temp = "";
            } else {
                temp += char;
            }
        }
        tempArr.push(temp);
        tempArr.length == 2 ? tempArr : tempArr.push("");

        result.push(tempArr);
    }

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
    return result;

    //* map()
    return todos.map((item) => {
        let part = item.split("|");
        return part.length == 2 ? part : [part[0], ""];
    });
}

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

//========================================//

const todos = [
    ["Buy car signal light", "16/1/2021"],
    ["Return bycycle brake", "17/1/2021"],
    ["Buy A4 Paper", ""],
    ["Install Garage Shed", "18/1/2021"],
    ["Service PC", "18/1/2021"],
    ["Fix rooftops", "19/1/2021"],
    ["Watching TV series", "19/1/2021"],
    ["Buy new toys", "19/1/2021"],
    ["Playing Mobile Legends", ""],
];
function filterTodos(todos) {
    //* manual
    let result = [];
    todos.forEach((todo) => {
        let [task, date] = todo;
        if (date) result.push(todo);
    });

    return result;

    // your code here
    //* filter()
    // handle todo[1] yg isinya spasi, karena spasi itu truthy di js
    return todos.filter((todo) => todo[1] && todo[1].trim() != "");
}

console.log(filterTodos(todos));
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
