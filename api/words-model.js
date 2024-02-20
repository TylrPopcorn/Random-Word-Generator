//This file is responsible for word api related things.
//VARIABLES:
//----
const axios = require("axios");

//FUNCTIONS:
//----------
const Functions = {}; //ALL functions located under one folder/table.

//-----------------         ------------------\\

//This function will import a new word from a word api:
Functions.getNewWord = async function () {
  const getWord = await axios.get("https://random-word-api.herokuapp.com/word");
  //CREDIT goes to the original creator of the API and for making this API available for use.
  //Thanks.

  const { data } = getWord; //The data the is retrieved from the api.
  return data[0]; //return the random word.
};

//EXPORTS:
//-----------------------------
module.exports = Functions;


