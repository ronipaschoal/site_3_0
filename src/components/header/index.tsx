const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-gray-900 text-white flex justify-center">
      <ul className="flex flex-row gap-8">
        <li>
          <a href="#home" className="px-4 hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="px-4 hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="px-4 hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="px-4 hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
