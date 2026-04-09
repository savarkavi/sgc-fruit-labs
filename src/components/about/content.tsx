import { amarante } from "@/fonts/fonts";

const Content = () => {
  return (
    <div className="w-full bg-green-200 py-16 md:flex-1/2 md:py-24">
      <p
        className={`scale-y-110 text-center text-5xl tracking-wide text-green-500 uppercase sm:text-6xl md:text-8xl`}
        style={{
          textShadow:
            "0px 1px 0 #2B1B12, 0px 2px 0 #2B1B12, 0px 3px 0 #2B1B12, 0px 4px 0 #2B1B12, 0px 5px 0 #2B1B12, 0px 6px 0 #2B1B12, 0px 7px 0 #2B1B12, 0px 8px 0 #2B1B12, 0px 9px 0 #2B1B12",
        }}
      >
        About Us
      </p>
      <p className="mt-6 mb-12 text-center text-base tracking-widest text-[#2B1B12] uppercase md:mt-8 md:mb-26 md:text-xl">
        Born From a Simple Question
      </p>
      <div
        className={`${amarante.className} mx-auto flex max-w-sm flex-col items-center gap-4 px-4 text-justify text-base leading-relaxed md:max-w-150 md:px-0 md:text-lg`}
      >
        <p>
          We started with a frustration. The healthiest snacks often felt
          uninspiring, while the most enjoyable ones came loaded with sugar and
          empty calories. We believed there had to be a better way—something
          that didn&apos;t force a trade-off between taste and nutrition.
        </p>
        <p>
          Our journey began by going back to the source: real fruit, grown in
          some of India&apos;s most celebrated orchards, where flavor is shaped by
          soil, season, and tradition. But we didn&apos;t stop at nature. We brought
          in science—not to replace it, but to elevate it. By combining advanced
          food technology with carefully sourced ingredients, we set out to
          create a new kind of snack: one that feels indulgent, performs like a
          functional food, and stays true to its origin.
        </p>
        <p>
          Today, we&apos;re building more than a product. We&apos;re redefining what a
          snack can be—clean, intelligent, and crafted for people who expect
          more from what they eat.
        </p>
      </div>
    </div>
  );
};

export default Content;
