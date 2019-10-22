# Bamazon-Storefront
<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo, twitter_handle, email
-->
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

This app will let a user, using Node.js and MySQL, to shop from a mock Amazon storefront. The user can act as a customer and will have the ability to shop from existing stock. The user can also act as a manager and will be able to see stock, low inventory items, restock low inventory, or add new products. 

## Built With
- [Node](https://nodejs.org/en/)
- [Node Package- DotEnv](https://www.npmjs.com/package/dotenv)
- [Node Package- Inquirer](https://www.npmjs.com/package/inquirer)
- [Node Package- MySQL](https://www.npmjs.com/package/mysql)
- [othneildrew - Best README Template](https://github.com/othneildrew/Best-README-Template)

<!-- GETTING STARTED -->
## Getting Started
To get a local copy up and running follow these simple steps.
### Installation
1. Clone the repo 
    - git clone https://github.com/speechgirl1505/Bamazon-Storefront.git

2. Install NPM packages
    - npm install mysql
    - npm install inquirer
    - npm install dotenv

3. Create .env to hide password for MySQL
    -- # mysqlpassword
    mysqlpassword=Put your password here

4. Create a .gitignore file and put x information in there
    - node_modules
    - .env

### Screenshots

#### `Customer`

Customer Functions:
- What is the Id of the item you would you like to purchase:

- How many would you like to buy:

<img src=""/>

#### `Manager`

Manager Functions:
- What are we doing today boss:

    - View Products for Sale:
        
    - View Low Inventory: 
    
    - Add to Inventory:
        - What is the Id of the item you would you like to restock:
        - How many would you like to add:

    - Add New Products:
        - What is the item you would like to add
        - Into what category will the new item to be placed
        - How much does this item cost
        - How many of this item would you like to stock

<img src=""/>

#### `Supervisor`

To Be Displayed later when I figure it out:

## Who's Who of the App
Role Lead Developer for Bamazon Kala Elam
Project Link: [Github Link](https://github.com/speechgirl1505/Bamazon-Storefront)

## Acknowledgements
Tutor and TA's help 
Some code was borrowed from class activties

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->