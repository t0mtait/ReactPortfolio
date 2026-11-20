import './App.css';
import Navbar from './components/Navbar';
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorFollower from "./components/CursorFollower";
import BackgroundEffects from "./components/BackgroundEffects";
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
      <ThemeProvider>
          <div className="App animated-bg bg-zinc-50 dark:bg-black text-zinc-950 dark:text-white relative overflow-x-hidden min-h-screen transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
              {/* Interactive mouse-following cursor & ambient spotlight */}
              <CursorFollower />

              {/* Ambient floating dust motes & sparks */}
              <BackgroundEffects />

              {/* Luminous dynamic blurred mesh orbs */}
              <div className="animated-orb orb-1" aria-hidden="true"></div>
              <div className="animated-orb orb-2" aria-hidden="true"></div>
              <div className="animated-orb orb-3" aria-hidden="true"></div>

              <div className="relative z-10">
                  <Navbar/>
                  <div className="section-animate section-delay-1">
                      <About/>
                  </div>
                  <div className="section-animate section-delay-2">
                      <Skills/>
                  </div>
                  <div className="section-animate section-delay-3">
                      <Experience/>
                  </div>
                  <div className="section-animate section-delay-4">
                      <Projects />
                  </div>
                  <div className="section-animate section-delay-5">
                      <Contact />
                  </div>
              </div>
              
              <Footer />
          </div>
      </ThemeProvider>
  );
}

export default App;
