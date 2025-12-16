import './App.css';
import Navbar from './components/Navbar'
import About from "./components/About";
import Background from "./components/Background";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
      <div className="App bg-gray-900 text-white relative overflow-x-hidden">
          <Background/>
          <Navbar/>
          <About/>
          <Experience/>
          <Projects />
          <Contact />
      </div>
  );
}

export default App;
