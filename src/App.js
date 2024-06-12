
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import AboutUs from './components/AboutUs.js';
import { useState } from 'react';



function App() {

  const [mode, setmode] = useState('light');

  const [btntext, setbtntext] = useState('Enable To DarkMode');

  const toggleMode = () => {
    if (mode === light) {
      setmode="dark";
      document.body.style.background="light";
      document.body.style.color="dark";
      
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
