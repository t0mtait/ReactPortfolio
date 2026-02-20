import './App.css';
import Navbar from './components/Navbar'
import About from "./components/About";
// import Background from "./components/Background";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
      <ThemeProvider>
          <div className="App bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-slate-900 dark:to-black text-gray-900 dark:text-gray-100 relative overflow-x-hidden min-h-screen transition-colors duration-300">
              {/* <Background/> */}
              <Navbar/>
              <About/>
              <Experience/>
              <Projects />
              <Contact />
          </div>
      </ThemeProvider>
  );
}

export default App;
