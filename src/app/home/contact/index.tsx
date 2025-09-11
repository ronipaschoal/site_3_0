import Section from "@/components/section";
import Image from "next/image";

const Contact = () => {
  return (
    <Section id="contact" title="Get in Touch">
      <p className="pb-10">
        I&apos;m avaliable to help in any way I can, just send a hello!
      </p>
      <p className="row-start-2 flex flex-row items-center gap-10">
        <a
          className="flex flex-col justify-center items-center gap-2"
          href="mailto:ronipaschoal@gmail.com"
        >
          <Image
            className="dark:invert"
            src="./images/logos/email.svg"
            alt="email icon"
            width={40}
            height={40}
            priority
          />
          Contato
        </a>
        <a
          className="flex flex-col justify-center items-center gap-2"
          href="https://www.linkedin.com/in/ronipaschoal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="./images/logos/linkedin.svg"
            alt="linkedin icon"
            width={40}
            height={40}
            priority
          />
          LinkedIn
        </a>
      </p>
    </Section>
  );
};

export default Contact;
