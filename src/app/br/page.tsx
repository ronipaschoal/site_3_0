import { Metadata } from "next";
import About from "@/app/home/about";
import Welcome from "@/app/home/welcome";
import Projects from "@/app/home/projects";
import Contact from "@/app/home/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Language } from "@/types/language";

export const metadata: Metadata = {
  title: "Roni Paschoal - Desenvolvedor Front-End e Mobile",
  description:
    "Portfólio de Roni Paschoal, engenheiro de software especializado em desenvolvimento web e mobile.",
};

const Home = () => {
  return (
    <>
      <Navbar language={Language.BR} />
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
