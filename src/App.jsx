import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Certifications } from "./components/Certifications";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
    </Layout>
  );
}

export default App;
