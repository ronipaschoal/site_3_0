import Section from "@/components/section";
import Image from "next/image";

const Welcome = () => {
  return (
    <Section id="home">
      <p className="row-start-2 flex flex-col items-center">
        <Image
          src="/images/logos/logo-shadow.png"
          alt="Next.js logo"
          width={80}
          height={80}
          priority
        />
      </p>
      <p className="text-xl font-bold">Hello, I am</p>
      <h2 className="text-4xl">Roni Paschoal</h2>
      <h1 className="text-xl">Front-End and Mobile Developer</h1>
    </Section>
  );
};

export default Welcome;
