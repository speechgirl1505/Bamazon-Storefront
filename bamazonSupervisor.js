

//Was unable to get the supervisors functionality up and working prior to deadline
// require("dotenv").config();
// var key = require("./keys.js");
// var getPass = key.password
// var mysql = require("mysql");
// var inquirer = require("inquirer");


// var connection = mysql.createConnection({
//     host: "localhost",

//     // Your port; if not 3306
//     port: 3306,

//     // Your username
//     user: "root",

//     // Your password
//     password: getPass,
//     database: "bamazonCustomer"
// });


// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");
//   worldsBestBoss();
// });

// function worldsBestBoss() {
//     inquirer
//       .prompt({
//         name: "well_hello",
//         type: "list",
//         message: "What are we doing today?",
//         choices: ["View Product Sales by Department", 
//                     "Create New Department"]
//       })
//       .then(function(answer) {
//     // Specifics functions are called based on what the manager chooses 
//         switch (answer.Welcome) {
//             case "View Product Sales by Department":
//                 saleDep();
//                 break;
            
//             case "Create New Department":
//                 gimmeTheNewNew()
//                 break;
        
//             default:
//                 connection.end()
//                 break;
//         }
//       });
//   };

// function saleDep() {

// };

// // This is the function that displays the table
// function gimmeTheData() {
//     connection.query("SELECT * FROM saleItems",
//     function (err, res) {
//       if (err) {
//         console.log(err)
//       };
//       console.table(res);
//     })
// };