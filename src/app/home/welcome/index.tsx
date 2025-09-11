import Section from "@/components/section";
import Image from "next/image";

const Welcome = () => {
  return (
    <Section id="home">
      <p className="row-start-2 flex flex-col items-center pb-6">
        <Image
          src="/images/logos/logo-shadow.png"
          alt="Roni Paschoal logo"
          width={80}
          height={80}
          priority
        />
      </p>
      <p className="text-xl font-bold pb-4">Hello, I am</p>
      <h2 className="text-4xl pb-4">Roni Paschoal</h2>
      <h1 className="text-xl">Front-End and Mobile Developer</h1>
    </Section>
  );
};

export default Welcome;
