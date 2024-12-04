// import logo from './logo
import './App.css';
import Abouts from './components/Abouts';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


// let name = "Sonam Gautam"

// function hello() {
//   var fullname = "Sonam";
//   var designation = "Software Developer"
// }


function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Navbar title = "Home" mode={darkMode} />
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
