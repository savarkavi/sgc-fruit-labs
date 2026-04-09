"use client";

import { useRef, Fragment } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MarqueeTwo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 50,
        repeat: -1,
      });
    },
    { scope: containerRef },
  );

  const items = [
    "Organic Certified",
    "Nutri Score A",
    "WIPO Lisbon System",
    "Probiotic Infused",
    "GI Heritage Fruits",
    "97% Nutrients Retained",
  ];

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden bg-[#f2ebd0] py-6 text-black"
    >
      <div ref={marqueeRef} className="flex w-max items-center gap-8 pr-8">
        {[...Array(10)].map((_, setIndex) => (
          <Fragment key={setIndex}>
            {items.map((item, index) => (
              <Fragment key={`${setIndex}-${index}`}>
                <p className="shrink-0 text-2xl uppercase">{item}</p>
                <div className="h-2 w-2 shrink-0 rounded-full bg-black" />
              </Fragment>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTwo;
