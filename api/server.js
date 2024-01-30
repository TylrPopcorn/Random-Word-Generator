require("dotenv").config();

/**
 * Dependencies
 *
 * npm i nodemon
 * npx eslint --init
 * npm i express
 * npm install dotenv
 * npm i cors
 *
 */
const PORT = process.env.PORT || 9000;
const express = require("express");
//
const cors = require("cors");
//
const server = express();

//GLOBAL MIDDLEWARE
//-------------------
server.use(express.json()); //Allow the use of json request body fields
server.use(cors()); //enable cross-origin requests

server.get("/", (req, res) => {
  //base endpoint.
  res.send(`
        <h1> Welcome to Node! <h1>
    `);
});

//Catch any endpoints that cannot be found:
server.use("*", (req, res) => {
  //catch all 404 errors middleware:
  res.status(404).json({
    message: `${req.method} ${req.baseUrl} not found`,
  });
});

//ENDPOINTS
//-----------
server.listen(PORT, () => {
  console.log(`\nServer is running on port http://localhost:${PORT}\n`);
});
