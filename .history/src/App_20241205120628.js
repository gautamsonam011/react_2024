// import logo from './logo
import './App.css';
import Abouts from './components/Abouts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

// let name = "Sonam Gautam"

// function hello() {
//   var fullname = "Sonam";
//   var designation = "Software Developer"
// }


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#818114';
      setAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Navbar title = "Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={showAlert} />
      <div className='container my-3'>
      <TextForm heading="Enter the text below" />
      </div>
      <div className="container">
      <Abouts/>
      </div>
      
      
    </>
  );
}

export default App;
