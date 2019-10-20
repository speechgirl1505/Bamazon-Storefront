var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazonCustomer"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  hereGoesNothing();
});

// This is the function that displays the table
function worldsBestBoss() {
    connection.query("SELECT * FROM saleItems",
    function (err, res) {
      if (err) {
        console.log(err)
      };
      console.table(res);
    })
};