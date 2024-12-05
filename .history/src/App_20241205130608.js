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

    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#818114';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils Dark mode enabled";

      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      })
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils Light mode enabled";
    }
  }


  return (
    <>
      <Navbar title = "Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
      <TextForm heading="Enter the text below" showAlert={showAlert} />
      </div>
      <div className="container">
      <Abouts/>
      </div>
      
      
    </>
  );
}

export default App;
