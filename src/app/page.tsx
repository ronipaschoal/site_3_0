import About from "./home/about";
import Welcome from "./home/welcome";
import Projects from "./home/projects";
import Contact from "./home/contact";

const Home = () => {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">© 2025 Roni Paschoal</p>
      </footer>
    </>
  );
};

export default Home;
