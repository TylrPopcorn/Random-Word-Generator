require("dotenv").config();

/**
 * Dependencies
 *
 * npm i nodemon
 * npx eslint --init
 * npm i express
 * npm install dotenv
 *
 */
const PORT = process.env.PORT || 9000;
const express = require("express");

const server = express();

//GLOBAL MIDDLEWARE
server.use(express.json()); //Allow the use of json request body fields
