import Section from "@/components/section";
import Image from "next/image";

const Projects = () => {
  return (
    <Section id="projects" title="Some of my programs">
      <p className="row-start-2 flex flex-col items-center">
        <Image
          src="/images/photos/minha-comanda.png"
          alt="Next.js logo"
          width={600}
          height={200}
          priority
        />
      </p>
    </Section>
  );
};

export default Projects;
