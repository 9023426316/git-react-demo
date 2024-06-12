
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';
import AboutUs from './components/AboutUs.js';
import { useState } from 'react';



function App() {

  const [mode, setmode] = useState('light');

  const [btntext, setbtntext] = useState('Enable To DarkMode');
  return (
    <>
    <Navbar heading="SIT" />
    <TextForm heading="AboutUs">mode{mode},btntext{btntext}</TextForm>
    <AboutUs />
      </>
  );
}

export default App;
