import "./App.css";
import { Skills } from "./components/Sections/Skills";
import { Hero } from "./components/Sections/Hero";
import { About } from "./components/Sections/About";
import { Experience } from "./components/Sections/Experience";
import { Projects } from "./components/Sections/Projects";
import { Education } from "./components/Sections/Education";

function App() {
  return (
    <main className="p-16 ">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
    </main>
  );
}

export default App;
