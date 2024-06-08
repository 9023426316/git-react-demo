
import './App.css';
import AboutUs from './components/AboutUs.js';
import Navbar from './components/Navbar.js';
// import TextForm from './components/TextForm.js';



function App() {
  return (
    <>
  <Navbar title="SIT" aboutText="Contact Us"/>
  {/* <TextForm heading="Enter Text to Analyses Below"/> */}
  <AboutUs heading="About Us"/>
      </>
  );
}

export default App;
