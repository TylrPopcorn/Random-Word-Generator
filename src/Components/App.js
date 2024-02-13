//imports:
import React, { useState } from "react";
import axios from "axios";

//styles:
//--
//--

//(IMPORTED) functions:
import wait from "./wait.ts";

//==========================          ============================
//Main function:
let generateRunning = false; //Debounce for generating words
function App() {
  //------vars:
  const [word, setWord] = useState("Loading..."); //Used to keep track of the current word generated

  //--------------------------------                  --------------------------------
  //Functions:
  const generateWord = () => {
    //This function will generate a radnom word to be shown on the screen.
    const randomWordBox = document.querySelector(".randomWord");
    const wordHolder = document.querySelector(".WordHolder_outside");

    if (generateRunning === false) {
      //IF the current function is NOT already running THEN,
      generateRunning = true; //Turn on debouce

      //Invoke server so we can get a random word.
      async function fetchData() {
        try {
          const response = await axios.get("http://localhost:3000/");
          const Word = response.data; //the random word generated.
          console.log("Generated."); //console response

          return Word;
        } catch (error) {
          console.error("Error fetching data:", error.message);
          return error.message;
        }
      }

      // Call the async function
      fetchData().then((res) => {
        setWord(res); //Set word to the newely generated word.

        randomWordBox.classList.add("fade");
        wordHolder.classList.add("shine");

        // Wait a certain amount of time before ending function and removing effects:
        wait(1800).then(() => {
          randomWordBox.classList.remove("fade");
          wordHolder.classList.remove("shine");

          wait(600).then(() => {
            generateRunning = false;
          });
          //[NOTE]: By adding another wait at the end of this wait, we can give the function a little bit of time at the end to sit beofre running the function again.
        });
      });
    }
  };
  //--------------------------------                      --------------------------------
  //--
  //---HTML
  return (
    <div id="wrapper" className="App">
      <div className="WordArea">
        <div className="WordHolder_outside">
          <div className="WordHolder_middle">
            <p className="randomWord">{word}</p>
          </div>
        </div>
      </div>
      <div className="ButtonHolder">
        <button className="GenerateButton" onClick={generateWord}>
          Generate
        </button>
      </div>
      <div className="BottomFrame">
        <p>Click the button above to generate a random word</p>
      </div>
    </div>
  );
}
//==========================          ========================================
//Exports:
export default App;
