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
      className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20"
    >
      {title && <h3 className="text-4xl">{title}</h3>}
      <div className="flex flex-col gap-[32px] row-start-2 items-center">
        {children}
      </div>
    </section>
  );
};

export default Section;
