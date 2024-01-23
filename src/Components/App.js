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

  //---
  return (
    <div id="wrapper" className="App">
      <p>Hello world (APP)</p>
      <div className="WordArea">
        <p className="randomWord">{word}</p>
      </div>
    </div>
  );
}
//==========================          ========================================
//Exports:
export default App;
