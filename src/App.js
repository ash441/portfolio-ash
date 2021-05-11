
import "./App.css";
import Home from "./components/Home";
import About from './components/About';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (

    <div className="App">
      <Navbar /> 
      <Home />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
