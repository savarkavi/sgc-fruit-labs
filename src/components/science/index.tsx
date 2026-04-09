import { amarante } from "@/fonts/fonts";
import Image from "next/image";

const Science = () => {
  return (
    <section className="flex min-h-screen flex-col items-center bg-sky-300 py-16 md:py-24">
      <p
        className={`scale-y-110 text-center text-5xl tracking-wide text-blue-500 uppercase sm:text-6xl md:text-8xl`}
        style={{
          textShadow:
            "0px 1px 0 #2B1B12, 0px 2px 0 #2B1B12, 0px 3px 0 #2B1B12, 0px 4px 0 #2B1B12, 0px 5px 0 #2B1B12, 0px 6px 0 #2B1B12, 0px 7px 0 #2B1B12, 0px 8px 0 #2B1B12, 0px 9px 0 #2B1B12",
        }}
      >
        Our Vision
      </p>
      <p className="mt-6 mb-12 px-4 text-center text-base tracking-widest text-[#2B1B12] uppercase md:mb-26 md:mt-8 md:text-xl">
        Not coated. Not sprayed. Built within the fruit itself.
      </p>
      <div className="flex w-full max-w-350 flex-col items-center justify-center gap-10 px-4 lg:flex-row lg:gap-20 lg:px-0">
        <div className="rounded-xl border bg-yellow-500 p-4">
          <div className="relative h-64 w-64 rounded-xl sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-100 lg:w-100">
            <Image
              src="/science-img.jpg"
              alt="scientist image"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
        <div className="max-w-full px-2 md:max-w-2xl lg:max-w-150 lg:px-0">
          <p className={`${amarante.className} text-justify text-base leading-relaxed md:text-lg`}>
            Most snacks add nutrients to the surface—where they fade quickly,
            lose potency, and never truly become part of the food. Our process
            works differently. Using advanced vacuum-pulse technology, we draw
            high-potency plant extracts and probiotics deep into the fruit&apos;s
            natural pores, embedding them at the core of every bite. These
            nutrients are then stabilized within the fruit&apos;s structure, creating
            a protective &ldquo;bio-active shield&rdquo; that preserves their integrity
            without the need for artificial additives or chemical stabilizers.
            <br />
            <br />
            The result is a fundamentally new kind of snack—one where flavor,
            texture, and function are seamlessly integrated. With a signature
            light crunch and nutrients locked in until the moment you eat it,
            this is not just dried fruit—it&apos;s a precision-crafted delivery
            system for clean, effective nutrition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Science;
