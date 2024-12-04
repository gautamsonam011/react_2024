// import logo from './logo
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

// let name = "Sonam Gautam"

// function hello() {
//   var fullname = "Sonam";
//   var designation = "Software Developer"
// }


function App() {
  return (
    <>
      <Navbar title = "Home" />
      <div className='container'>
      <TextForm/>
      </div>
      
    </>
  );
}

export default App;
