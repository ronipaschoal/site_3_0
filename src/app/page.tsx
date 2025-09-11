import About from "./home/about";
import Welcome from "./home/welcome";
import Projects from "./home/projects";
import Contact from "./home/contact";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-[32px]">
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
