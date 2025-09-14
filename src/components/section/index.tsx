import { ReactNode } from "react";

import "./styles.css";

interface Props {
  id: string;
  title?: string;
  children: ReactNode;
}

const Section = ({ children, id, title }: Props) => {
  return (
    <section id={id} className="section">
      {title && <h3 className="section--title">{title}</h3>}
      <div className={`section--content ${title ? "with-title" : ""}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
