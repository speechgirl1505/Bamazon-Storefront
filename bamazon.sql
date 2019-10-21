DROP DATABASE IF EXISTS bamazonCustomer;

CREATE DATABASE bamazonCustomer;

USE bamazonCustomer;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name  VARCHAR(50) NOT NULL,
  department_name VARCHAR (50) NOT NULL,
  price DECIMAL (10,2) NOT NULL DEFAULT 0,
  stock_quantity integer default 0,
  product_sales DECIMAL (10,2) NOT NULL DEFAULT 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cardigan", "Clothing", 25.00, 9),
        ("Jeans", "Clothing", 48.96, 10),
        ("Scarf", "Clothing", 12.65, 5),
        ("IPad", "Electronics", 1300.00, 4),
        ("Iphone", "Electronics", 1285.00, 8),
        ("Water Bottle", "Home", 22.13, 11),
        ("Travel Mug", "Home", 12.72, 3),
        ("Siddartha", "Books", 8.42, 2),
        ("The Night Circus", "Books", 15.23, 6),
        ("Barbie", "Toys", 15.45, 4),
        ("GI Joe", "Toys", 11.63, 7);
        
SELECT * FROM products; 

CREATE TABLE departments (
    department_id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(50) NOT NULL,
    over_head_costs DECIMAL (10,2) NOT NULL DEFAULT 0,
    PRIMARY KEY (department_id)
);       

INSERT INTO departments (department_name, over_head_costs)
VALUES ("Clothing", 69000),
        ("Electronics", 81000),
        ("Home", 92000),
        ("Books", 28000);

SELECT * FROM departments;