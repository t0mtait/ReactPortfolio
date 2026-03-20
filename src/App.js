import './App.css';
import Navbar from './components/Navbar'
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
      <ThemeProvider>
          <div className="App animated-bg bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-slate-900 dark:to-black text-gray-900 dark:text-gray-100 relative overflow-x-hidden min-h-screen transition-colors duration-300">
              <div className="animated-orb orb-1" aria-hidden="true"></div>
              <div className="animated-orb orb-2" aria-hidden="true"></div>
              <div className="animated-orb orb-3" aria-hidden="true"></div>

              <div className="relative z-10">
                  <div className="section-animate section-delay-0">
                      <Navbar/>
                  </div>
                  <div className="section-animate section-delay-1">
                      <About/>
                  </div>
                  <div className="section-animate section-delay-2">
                      <Experience/>
                  </div>
                  <div className="section-animate section-delay-3">
                      <Projects />
                  </div>
                  <div className="section-animate section-delay-4">
                      <Contact />
                  </div>
              </div>
          </div>
      </ThemeProvider>
  );
}

export default App;
