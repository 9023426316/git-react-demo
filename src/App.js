
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import AboutUs from './components/AboutUs.js';
import { useState } from 'react';



function App() {

  const [mode, setmode] = useState('light');

  const [btntext, setbtntext] = useState('Enable To DarkMode');

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

  return (
    <>
    <Navbar heading="SIT" mode={mode} btntext={btntext} toggleMode={toggleMode}/>
    <TextForm heading="AboutUs"  mode={mode} btntext={btntext} toggleMode={toggleMode}></TextForm>
    <AboutUs />
      </>
  );
}

export default App;
