"use client";

import Image from "next/image";
import { Language } from "@/types/language";

import "./styles.css";
import Menu from "./components/menu";
import MenuMobile from "./components/menu_mobile";

const linkList = [
  { name: ["Home", "Home"], href: "#home" },
  { name: ["About", "Sobre"], href: "#about" },
  { name: ["Projects", "Projetos"], href: "#projects" },
  { name: ["Contact", "Contato"], href: "#contact" },
];

interface Props {
  language: Language;
}

const Navbar = ({ language }: Props) => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar__container">
          <Image
            src="/images/logos/logo-shadow.png"
            alt="Logo"
            width={32}
            height={32}
          />
          <Menu linkList={linkList} language={language} />
          <MenuMobile linkList={linkList} language={language} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
