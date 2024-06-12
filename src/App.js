import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {

  const [mode, setMode] = useState('light'); 

  const [btnText, newbtnText] = useState('Enable Dark Mode');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = 'black'
      document.body.style.color= 'white'
      newbtnText('Enable to Dark Mode')
    } else {
      setMode('light')
      document.body.style.background = 'white'
      document.body.style.color = 'black'
      newbtnText('Enable to Light Mode')
    }
  }

 
  const bluetoggleMode = () => {
    if (mode === 'light') {
      setMode('green')
      document.body.style.background = 'green'
      document.body.style.color= 'lightgreen'
    
    } else {
      setMode('blue')
      document.body.style.background = 'blue'
      document.body.style.color = 'black'

    }
  }

  
  const yellowtoggleMode = () => {
    if (mode === 'light') {
      setMode('yellow')
      document.body.style.background = 'orange'
      document.body.style.color= 'lightorange'
    
    } else {
      setMode('orange')
      document.body.style.background = 'yellow'
      document.body.style.color = 'lightyellow'

    }
  }

  // const bluetextarea = () => {
  //   if (mode === 'light') {
  //     setMode('green')
  //     document.body.style.background = 'green'
  //     document.body.style.color= 'lightgreen'
    
  //   } else {
  //     setMode('blue')
  //     document.body.style.background = 'blue'
  //     document.body.style.color = 'lightblue'

  //   }
  // }
  
  return (
    <>
      <Navbar title="SIT" aboutText="Prince" mode={mode} toggleMode={toggleMode} btntext={btnText} bluetoggleMode={bluetoggleMode} yellowtoggleMode={yellowtoggleMode}></Navbar>
      <TextForm heading="Intexr Text to Analyse Below" mode={mode} toggleMode={toggleMode}   ></TextForm>
    </>
  );
}

export default App;
