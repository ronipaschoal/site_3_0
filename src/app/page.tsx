import About from "./home/about";
import Welcome from "./home/welcome";
import Projects from "./home/projects";
import Contact from "./home/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Language } from "@/types/language";

const Home = () => {
  return (
    <>
      <Navbar language={Language.EN} />
      <main>
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
