import React from "react";
import Image from "next/image";
import { features } from "@/lib/constants";
import { amarante } from "@/fonts/fonts";

const Features = () => {
  return (
    <section className="bg-amber-200 px-4 py-12 text-black md:px-8 md:py-24">
      <div className="mx-auto flex max-w-300 flex-wrap justify-center gap-8 md:gap-10 lg:justify-between 2xl:max-w-350">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex w-full max-w-[300px] flex-col items-center text-center"
          >
            <div className="relative mb-6 h-24 w-24 md:h-30 md:w-30">
              <Image
                src={feature.icon}
                alt={feature.label}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mb-4 text-xl uppercase md:text-2xl">
              {feature.label}
            </h3>
            <p
              className={`${amarante.className} leading-relaxed text-zinc-900`}
            >
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
