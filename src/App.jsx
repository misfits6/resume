import "./App.css";
import { Skills } from "./components/Sections/Skills";
import { Hero } from "./components/Sections/Hero";
import { About } from "./components/Sections/About";
import { Experience } from "./components/Sections/Experience";
import { Projects } from "./components/Sections/Projects";
import { Education } from "./components/Sections/Education";
import { Certificates } from "./components/Sections/Certificates";
import { Pubilish } from "./components/Sections/Publish";
import { Voluntary } from "./components/Sections/Voluntary";
import { Lenguage } from "./components/Sections/Lenguage";
// import { Lenguage } from "./components/Sections/lenguage";

function App() {
  return (
    <main className="p-16 ">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certificates />
      <Lenguage />
      <Pubilish />
      <Voluntary />
    </main>
  );
}

export default App;
