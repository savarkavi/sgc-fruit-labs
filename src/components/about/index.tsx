import Image from "next/image";
import Content from "./content";

const About = () => {
  return (
    <section className="flex min-h-screen flex-col lg:h-screen lg:flex-row">
      <Content />
      <div className="relative h-72 w-full sm:h-96 md:h-120 lg:h-full lg:flex-1/2">
        <Image
          src="/about-img.jpg"
          alt="about-img"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default About;
