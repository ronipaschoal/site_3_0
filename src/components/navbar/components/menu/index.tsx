import { Language } from "@/types/language";

import "./styles.css";

type Props = {
  className?: string;
  linkList: { name: string[]; href: string }[];
  language: Language;
};

const Menu = ({ className, linkList, language }: Props) => {
  return (
    <div className={`navbar__menu ${className}`}>
      {linkList.map((link) => (
        <a
          key={link.name[language]}
          href={link.href}
          className="navbar__menu--item"
        >
          {link.name[language]}
        </a>
      ))}
      <div className="divider" />
      <a
        className="navbar__menu--item"
        href={language === Language.EN ? "/br" : "/"}
      >
        {language === Language.EN ? "BR" : "EN"}
      </a>
    </div>
  );
};

export default Menu;
