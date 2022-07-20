import React, { useEffect, useState } from "react";

import './App.css'
import { useSpeechSynthesis } from 'react-speech-kit';

function App() {
  
  const [text,setText] = useState('');
  const [set,setSet] = useState(true);
  const {speak ,voices} = useSpeechSynthesis();


  useEffect(() => {
   
      speak({text:"welcome to text to speech converter"});
      setSet(false);

  } ,[set]);
  
 

  const handleOnClick = () => {
    speak({text:text , voice: voices[4]})
   
  }

  function clr(e) {
    setText(" ");
  }



  return (
   <div className="con">
        <h1 className="h">Text to Speech Converter in React</h1>
        <textarea align="center" value={text} className="textArea" onChange={(e)=>{setText(e.target.value)}}></textarea>
        <div>
        <button className="button" onClick={()=>{handleOnClick()}}>Listen</button>
        <button className="button"  onClick={clr}>clear</button>
        </div>
        </div>
 
  );
}

export default App;
