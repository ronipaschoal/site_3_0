import Image from "next/image";

const Projects = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-[32px] row-start-2 items-center">
        <h2 className="text-4xl">Some of my programs</h2>
        <p className="row-start-2 flex flex-col items-center">
          <Image
            src="/images/photos/minha-comanda.png"
            alt="Next.js logo"
            width={600}
            height={200}
            priority
          />
        </p>
      </div>
    </div>
  );
};

export default Projects;
