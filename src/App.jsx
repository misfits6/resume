import "./App.css";
import { Skills } from "./components/Sections/Skills";
import { Hero } from "./components/Sections/Hero";
import { About } from "./components/Sections/About";
import { Experience } from "./components/Sections/Experience";
import { Projects } from "./components/Sections/Projects";
import { Education } from "./components/Sections/Education";
import { Pubilish } from "./components/Sections/Publish";
import { Voluntary } from "./components/Sections/Voluntary";

function App() {
  return (
    <main className="p-16 ">
      <Hero />
      <About />
      <Experience />
      <Education />
      <Pubilish />
      <Voluntary />
      {/* <Projects /> */}
      <Skills />
    </main>
  );
}

export default App;
