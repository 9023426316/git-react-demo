import React, { useState } from 'react'

export default function TextForm(props) {
   const [text, setText] = useState("Enter Your Text");

   const handleonchange = (event) => {
    setText(event.target.value)
   }

  const handleUpChange = () => {
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleLowChange = () => {
    let newText=text.toLowerCase();
    setText(newText)
  }
    const handleonclear = () => {
      let newText= "";
      setText(newText);
    }

    const handlecopy = () => {
      let newText=document.getElementById("exampleFormControlTextarea1");
      newText.select();
      navigator.clipboard.writeText(newText.value);
          
    }

    const handlespeak = () => {
      let newText = new SpeechSynthesisUtterance();
      newText.text= text;
      window.speechSynthesis.speak(newText);
    }

    const removespace = () => {
      let newText = text.split(/[ ] + /);
      setText(newText.join(" "));
        }
  
  return (
    <div className='container my-5'>
      <h1>{props.heading}</h1>
      <div class="mb-3 ">
        <label for="exampleFormControlTextarea1" class="form-label"></label>
        <textarea class={`form-control bg-${props.mode === 'light' ? 'light': 'dark'} text-${props.mode === 'light' ? 'dark': 'light'}`} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonchange}>Input Your Text</textarea>
   
        <button onClick={handleUpChange} className='my-5 btn btn-success'>Change to UpperCase</button>
        <button onClick={handleLowChange} className='my-5 mx-3 btn btn-success'>Change to LowerCase</button>
        <button onClick={handleonclear} className='my-5 mx-3 btn btn-success'>Clear</button>
        <button onClick={handlecopy} className='my-5 mx-3 btn btn-success'>Copy</button>
        <button onClick={handlespeak} className='my-5 mx-3 btn btn-success'>Speak</button>
        <button onclick={removespace} className='my-5 mx-3 btn btn-success'>RemoveSpace</button>
      </div>
      <h1>Text Summry</h1>
      <p> {text.split(" ").length}Word</p>
      <p> {text.length}Characters</p>
      <p>{0.008 * text.split(" ")}Time</p>
      <p>Preview</p>
      <p>{text}</p>

    </div>

    
  )
}
