# Bamazon-Storefront

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- TABLE OF CONTENTS -->

## Table of Contents
- [About the Project](#about-the-project)
    - [Built With](#built-with)
- [Getting Started](#getting-started)
    - [Installation](#installation)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->
## About The Project

This app will let a user, using Node.js and MySQL, shop from a mock Amazon storefront. The user can act as a customer and will have the ability to shop from existing stock. The user can also act as a manager and will be able to see stock, low inventory items, restock low inventory, or add new products. 

## Built With
- [Node](https://nodejs.org/en/)
- [Node Package- DotEnv](https://www.npmjs.com/package/dotenv)
- [Node Package- Inquirer](https://www.npmjs.com/package/inquirer)
- [Node Package- MySQL](https://www.npmjs.com/package/mysql)
- [othneildrew - Best README Template](https://github.com/othneildrew/Best-README-Template)

<!-- GETTING STARTED -->
## Getting Started
To follow along at home these are the steps:

### Installation
1. Clone the repo 
    - git clone https://github.com/speechgirl1505/Bamazon-Storefront.git

2. Install NPM packages
    - npm install mysql
    - npm install inquirer
    - npm install dotenv

3. Create .env to hide password for MySQL
    - #mysqlpassword
    - mysqlpassword=Put your password here

4. Create a .gitignore file and put x information in there
    - node_modules
    - .env

### Screenshots

#### `Customer`

The Customer can purchase items by their id. If there is enough in stock they will be given a total cost of all items. If there is not enough stock they will be alerted there is not enough in stock and asked if they would like to purchase something else.

Customer Functions:

- What is the Id of the item you would you like to purchase:
<img src="cus1.png"/>
- How many would you like to buy:
<img src="cus2.png"/>
- Low Stock
<img src="cus3.png"/>

#### `Manager`

The manager can view all inventory, view low inventory that has less than 5 items, add to inventory, or add new items to inventory.

Manager Functions:
- What are we doing today boss:
<img src="man1.png"/>
    - View Products for Sale:
    <img src="man2.png"/>
    - View Low Inventory: 
    <img src="man3.png"/>
    - Add to Inventory:
        - What is the Id of the item you would you like to restock:
        - How many would you like to add:
        <img src="man4.png"/>
    - Add New Products:
        - What is the item you would like to add
        - Into what category will the new item to be placed
        - How much does this item cost
        - How many of this item would you like to stock
        <img src="man5.png"/>


#### `Supervisor`

To Be Displayed later when I figure it out:

## Who's Who of the App

- Role Lead Developer for Bamazon: Kala Elam
- Project Link: [Github Link](https://github.com/speechgirl1505/Bamazon-Storefront)

## Acknowledgements

    - Tutor and TA's help 
    - Some code was borrowed from SMU Bootcamp class activties
