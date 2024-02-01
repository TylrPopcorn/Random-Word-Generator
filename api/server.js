require("dotenv").config();

/**
 * Dependencies
 *
 * npm i nodemon
 * npx eslint --init
 * npm i express
 * npm install dotenv
 * npm i cors
 * npm i axios
 *
 */
//IMPORTS:
//----
const Words = require("./words-model");

//VARIABLES:
//------------
const PORT = process.env.PORT || 9000;
const express = require("express");
//
const cors = require("cors");
//
const server = express();

//GLOBAL MIDDLEWARE:
//-----------------------
server.use(express.json()); //Allow the use of json request body fields
server.use(cors()); //enable cross-origin requests

//ENDPOINTS:
//--------------------------------
server.get("/", (req, res) => {
  //base endpoint.
  Words.getNewWord()
    .then((word) => {
      //SUCCESSFULLY RETRIEVED A WORD
      console.log(`SUCCESS - imported NEW word!`);
      res.status(200).send(word); //return the data.
      return word;
    })
    .catch((err) => {
      //FAILED TO RETRIEVE A WORD
      console.log("Internal error - ", err.message);
      res.status(500).json({
        message: "Error retrieving words",
      });
      return;
    });
});

//Catch any endpoints that cannot be found:
server.use("*", (req, res) => {
  //catch all 404 errors middleware:
  res.status(404).json({
    message: `${req.method} ${req.baseUrl} not found`,
  });
});

//----------------------------             ---------------------------------------
//----------------------------             ---------------------------------------
server.listen(PORT, () => {
  console.log(`\nServer is running on port http://localhost:${PORT}\n`);
});
