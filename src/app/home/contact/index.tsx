import Image from "next/image";

const Contact = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-[32px] row-start-2 items-center">
        <h2 className="text-4xl">Get in Touch</h2>
        <p>I&apos;m avaliable to help in any way I can, just send a hello!</p>
        <p className="row-start-2 flex flex-row items-center gap-32">
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
      </div>
    </div>
  );
};

export default Contact;
