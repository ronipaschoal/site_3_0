"use client";

import Image from "next/image";
import { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="bg-black text-gray-800 border-b shadow-sm fixed w-full z-10 opacity-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-xl text-red-400">
              <Image
                src="/images/logos/logo-shadow.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-red-400 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setOpen(!open)}
                className="text-gray-300 hover:text-red-400 transition"
              >
                {open ? <IoIosClose size={32} /> : <IoIosMenu size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            {links.map((link) => (
              <a
                onClick={() => setOpen(false)}
                key={link.name}
                href={link.href}
                className="block text-gray-300 hover:text-red-400 transition text-center"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
