import logo from './logo.svg';
import './App.css';

let name = "Sonam Gautam"

function hello(){
 var fullname =  "Sonam";
 var designation = "Software Developer"
}


function App() {
  return (
    <>
    <div className="blank">
      <li className="k">
        Lovely
      </li>
      {name}
      <h1>My name is {hello.fullname}. I am {hello.designation}</h1>
    </div>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       This is a Web
    //     </p>
        
    //   </header>
    // </div>
  );
}

export default App;
