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
  wellHelloThere();
});

function wellHelloThere() {
    inquirer
      .prompt({
        name: "Welcome",
        type: "list",
        message: "What are we doing today boss?",
        choices: ["View Products for Sale", 
                    "View Low Inventory", 
                    "Add to Inventory", 
                    "Add New Products"]
      })
      .then(function(answer) {
    // Specifics functions are called based on what the manager chooses 
        switch (answer.Welcome) {
            case "View Products for Sale":
                forSale();
                break;
            
            case "View Low Inventory":
                howLowCanYouGo()
                break;
            
            case "Add to Inventory":
                gimmeMore();
                break;
            
            case "Add New Products":
                newIsBetter();
                break;
        
            default:
                connection.end()
                break;
        }
      });
  };

// If the managaer chooses to view items for sale the table displays all items
function forSale() {
    connection.query("SELECT * FROM saleItems",
    function (err, res) {
      if (err) {
        console.log(err)
      };
      console.table(res);
    })
    connection.end();
};

//If the managaer chooses to view low inventory the table displays items with less than 5 in stock
function howLowCanYouGo() {
    connection.query("SELECT * FROM saleItems WHERE stock_quantity < 5",
    function (err, res) {
      if (err) {
        console.log(err)
      };
      console.table(res);
    })
    connection.end();
};

// If the managaer chooses to add inventory asks what they would like to stock and how many and updates table
function gimmeMore(){
    showMeTheTable();
    inquirer.prompt([{
        type: "number",
        name: "item_id",
        message: "What is the Id of the item you would you like to restock",
        filter: Number
      }, {
        type: "number",
        name: "stock_quantity",
        message: "How many would you like to add?",
        filter: Number
      }])
        .then(function (answer) {
                connection.query("UPDATE saleItems SET stock_quantity = stock_quantity + ? WHERE item_id = ? ",
                  [answer.stock_quantity, answer.item_id],
                  function (err, res) {
                    if (err) {
                      console.log(err)
                    };
                    showMeTheTable();
                    // console.log("We are all stocked up!")
                    connection.end();
            });
        })
    };

// If the managaer chooses to add new item they are asked for the information regarding said item and the table is updated with new item
function newIsBetter() {
    inquirer
    .prompt([
      {
        name: "product_name",
        type: "input",
        message: "What is the item you would like to add?"
      },
      {
        name: "department_name",
        type: "input",
        message: "Into what category will the new item to be placed?"
      },
      {
        name: "price",
        type: "number",
        message: "How much does this item cost?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "stock_quantity",
        type: "number",
        message: "How many of this item would you like to stock?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }
    ])
    .then(function(answer) {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO saleItems SET ?",
        {
          product_name: answer.product_name,
          department_name: answer.department_name,
          price: answer.price || 0,
          stock_quantity: answer.stock_quantity || 0
        },
        function(err) {
          if (err) throw err;
          console.log("You have added a new product!");
          // re-prompt the manager to start over
          wellHelloThere();
        }
      );
    });
};

// This is the function that displays the table
function showMeTheTable() {
    connection.query("SELECT * FROM saleItems",
    function (err, res) {
      if (err) {
        console.log(err)
      };
      console.table(res);
    })
};

