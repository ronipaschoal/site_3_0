import { Language } from "@/types/language";
import { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

import "./styles.css";

type Props = {
  className?: string;
  linkList: { name: string[]; href: string }[];
  language: Language;
};

const MenuMobile = ({ className, linkList, language }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`navbar__menu-mobile ${className}`}>
      <div
        className={`navbar__menu-mobile--content ${
          open ? "navbar__menu-mobile--open" : ""
        }`}
      >
        {linkList.map((link) => (
          <a
            onClick={() => setOpen(false)}
            key={link.name[language]}
            href={link.href}
            className="navbar__menu-mobile--item"
          >
            {link.name[language]}
          </a>
        ))}
        <div className="divider" />
        <a
          className="navbar__menu-mobile--item"
          href={language === Language.EN ? "/br" : "/"}
        >
          {language === Language.EN ? "BR" : "EN"}
        </a>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="navbar__menu-mobile--button"
      >
        {open ? <IoIosClose size={32} /> : <IoIosMenu size={32} />}
      </button>
    </div>
  );
};

export default MenuMobile;
