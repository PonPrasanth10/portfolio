import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Skills } from "../sections/Skills";
import { Projects } from "../sections/Projects";
import { Experience } from "../sections/Experience";
import { Contact } from "../sections/Contact";

export const Home = () => {
  return (
    <main className="w-full flex flex-col items-center">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
};
