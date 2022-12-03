import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from './components/Skills'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <div className="flex flex-col gap-16">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <About />
    </div>
  );
}

export default App;
