// import logo from './logo
import './App.css';
import Abouts from './components/Abouts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

// Router setup 
// npm install react-router-dom

// import { 
//   BrowserRouter as Router ,
//   Switch,
//   Route,
//   // Link
// } from 'react-router-dom';


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

  const removeBodyClasses(){
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    
  }
  const toggleMode = (cls) =>{
    document.body.classList.add('bg-'+cls)
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#818114';
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils Dark mode enabled";

      setInterval(() => {
        document.title = "TextUtils is Amazing Mode";
      }, 2000);
      setInterval(() => {
        document.title = "Install TextUtils Now";
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils Light mode enabled";
    }
  }


  return (
    <>
    {/* <Router> */}
      <Navbar title = "Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      {/* <Switch>
        <Route path="/abouts">
          // <Abouts/>
        </Route> */}
        {/* <Route path="/">
        </Route> */}

        {/* </Switch> */}
      <div className='container my-3'>
      <TextForm heading="Enter the text below" showAlert={showAlert} />
      </div>
      <div className="container">
      <Abouts mode={mode}  />
      </div>
    {/* // </Router>   */}
    </>
  );
}

export default App;
