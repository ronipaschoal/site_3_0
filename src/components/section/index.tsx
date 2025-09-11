import { ReactNode } from "react";

interface Props {
  id: string;
  title?: string;
  children: ReactNode;
}

const Section = ({ children, id, title }: Props) => {
  return (
    <section
      id={id}
      className={`font-sans flex text-center ${
        title ? "flex-col" : "items-center justify-center"
      } min-h-screen p-8 sm:p-20`}
    >
      {title && <h3 className="text-4xl pt-12 pb-12">{title}</h3>}
      <div className={`flex flex-col items-center text-center`}>{children}</div>
    </section>
  );
};

export default Section;
