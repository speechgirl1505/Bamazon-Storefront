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
    showStuff();
});

// setting database quantity globally to be called inside functions
var dbQty;

// function that asks what you would like to purchase
function order() {
    inquirer.prompt([{
        type: "number",
        name: "item_id",
        message: "What is the Id of the item you would you like to purchase?",
        filter: Number
        // validate: function(value) {
        //   if (isNaN(value) === false) {
        //     return true;
        //   }
        //   return false;
        // }
    }, {
        type: "number",
        name: "stock_quantity",
        message: "How many would you like to buy?",
        filter: Number
    }])
        .then(function (answer) {
            connection.query("SELECT stock_quantity FROM products WHERE item_id = ? ",
                [answer.item_id],
                function (err, res) {
                    if (err) {
                        console.log(err)
                    };
                    dbQty = res[0].stock_quantity;
                    if (dbQty < answer.stock_quantity) {
                        console.log("We are all out sorry 'bout your luck!")
                        askMeAgain();
                    } else {
                        connection.query("UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ? ",
                            [answer.stock_quantity, answer.item_id],
                            function (err, res) {
                                if (err) {
                                    console.log(err)
                                };
                                displayPrice(answer.item_id, answer.stock_quantity);
                            })
                    };
                });
        })
};

// display total price of item(s)
function displayPrice(id, quantity) {
    connection.query("SELECT price FROM products WHERE item_id = ? ",
        [id],
        function (err, res) {
            if (err) {
                console.log(err)
            };
            console.log("Your total is $" + res[0].price * quantity);
        });
    connection.end();
};

// based on their answer, either try to buy something else that is in stock or quit
function askMeAgain() {
    inquirer
        .prompt({
            name: "TryorQuit",
            type: "list",
            message: "Would you like to [TRY AGAIN] or [Quit]?",
            choices: ["TRY AGAIN", "QUIT"]
        })
        .then(function (answer) {
            if (answer.TryorQuit === "TRY AGAIN") {
                order();
            }
            if (answer.TryorQuit === "QUIT") {
                connection.end();
            }
        });
};

//displays the table showing available items
function showStuff() {
    connection.query("SELECT item_id, product_name, price FROM products",
        function (err, res) {
            if (err) {
                console.log(err)
            };
            console.table(res);
            order();
        })
};