// import logo from './logo
import './App.css';
import Abouts from './components/Abouts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

// let name = "Sonam Gautam"

// function hello() {
//   var fullname = "Sonam";
//   var designation = "Software Developer"
// }


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#818114';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title = "Home" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
      <TextForm heading="Enter the text below" />
      </div>
      <div className="container">
      <Abouts/>
      </div>
      <Alert/>
      
    </>
  );
}

export default App;
