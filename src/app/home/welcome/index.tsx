import Image from "next/image";

const Welcome = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-[32px] row-start-2 items-center">
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
      </div>
    </div>
  );
};

export default Welcome;
