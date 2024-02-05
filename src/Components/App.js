//imports:
import React, { useState } from "react";

//styles:
//--
//--

//(IMPORTED) functions:
import wait from "./wait.ts";

//==========================          ============================
//Main function:
function App() {
  //------vars:
  const [word, setWord] = useState("Loading..."); //Used to keep track of the current word generated

  //--------------------------------
  //Functions:
  let generateRunning = false; //Debounce
  const generateWord = () => {
    //This function will generate a radnom word to be shown on the screen.
    const randomWordBox = document.querySelector(".randomWord");
    const wordHolder = document.querySelector(".WordHolder_outside");

    if (generateRunning === false) {
      //IF the current function is NOT already running THEN,
      generateRunning = true; //Turn on debouce

      //TODO: Invoke server so we can get a random word.

      console.log("Generated."); //console response
      randomWordBox.classList.add("fade");
      wordHolder.classList.add("shine");

      // Wait a certain amount of time before ending function and removing effects:
      wait(2000).then(() => {
        randomWordBox.classList.remove("fade");
        wordHolder.classList.remove("shine");

        wait(1000).then(() => {
          generateRunning = false;
        });
        //[NOTE]: By adding another wait at the end of this wait, we can give the function a little bit of time at the end to sit beofre running the function again.
      });
    }
  };
  //--
  //---
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
        <p>Click the button above to generate a random number</p>
      </div>
    </div>
  );
}
//==========================          ========================================
//Exports:
export default App;
