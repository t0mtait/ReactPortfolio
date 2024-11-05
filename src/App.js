import './App.css';
import Navbar from './components/Navbar'
import About from "./components/About";
import Background from "./components/Background";
import Experience from "./components/Experience";
function App() {
  return (
      <div className="App">
          <Background/>
          <Navbar/>
          <About/>
          <Experience/>

      </div>
  );
}

export default App;
