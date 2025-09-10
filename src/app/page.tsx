import About from "./home/about";
import Welcome from "./home/welcome";
import Projects from "./home/projects";
import Contact from "./home/contact";
import Navbar from "@/components/header";

const Home = () => {
  return (
    <>
      <main className="flex flex-col gap-[32px]">
        <header className="w-full fixed">
          <Navbar />
        </header>
        <Welcome />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center fixed bottom-0 w-full p-1 bg-gray-200 dark:bg-gray-800">
        <p className="text-sm text-gray-500">© 2025 Roni Paschoal</p>
      </footer>
    </>
  );
};

export default Home;
