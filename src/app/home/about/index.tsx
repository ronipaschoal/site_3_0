const About = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div className="flex flex-col gap-[32px] row-start-2 items-center">
        <p className="text-3xl font-bold">About Me</p>
        <p className="text-md">
          Hello! I am a long-time enthusiast of hybrid mobile technology,
          working in the software development space since 2013. I started my
          journey using AngularJs and jQuery to create apps with PhoneGap, and
          since then I have explored different tools like Angular, React and,
          more recently, Dart and Flutter.
        </p>
        <p className="text-md">
          After a few years focusing mainly on front-end development, I returned
          to the world of mobile apps in late 2021 and completely fell in love
          with Dart and Flutter. Currently, I am part of the first
          mobile-focused team at TOTVs - CMNet, where I have the opportunity to
          develop libraries and applications for Android and iOS.
        </p>
        <p className="text-md">
          I love facing challenges and adapting quickly to new technologies.
          Always looking for innovation, I like to collaborate on projects that
          have a real and positive impact. If you&apos;re interested in mobile
          technology or just want to exchange ideas on the subject, I&apos;m
          always open for a conversation! Let&apos;s connect?
        </p>
      </div>
    </div>
  );
};

export default About;
