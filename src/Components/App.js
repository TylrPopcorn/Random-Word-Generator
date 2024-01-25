//imports:
import React, { useState } from "react";

//styles:
// import '../../styles/styles.css';

//(IMPORTED) functions:
//--

//==========================          ============================
//Main function:
function App() {
  //------vars:
  const [word, setWord] = useState(""); //Used to keep track of the current word generated

  //--------------------------------
  //Functions:
  const generateWord = () => {
    //This function will generate a radnom word to be shown on the screen.
    console.log("Generated.");
  };
  //--
  //---
  return (
    <div id="wrapper" className="App">
      <p>Hello world (APP)</p>
      <div className="WordArea">
        <p className="randomWord">{word}</p>
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
