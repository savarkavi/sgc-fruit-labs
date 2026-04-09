"use client";

import { amarante, limelight } from "@/fonts/fonts";
import Image from "next/image";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroSection = () => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState(0);

  // Loading animation logic
  useGSAP(
    () => {
      if (loadedImages < 3) {
        gsap.to(".loading-char", {
          y: -15,
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          duration: 0.5,
        });
      } else {
        // Reveal the main site
        const tl = gsap.timeline();
        tl.to(".loading-char", {
          y: -30,
          opacity: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: "back.in(2)",
        }).to(loadingRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut",
        });
      }
    },
    { dependencies: [loadedImages], scope: loadingRef },
  );

  useGSAP(
    () => {
      const handleMouseMove = (e: MouseEvent) => {
        const xPos = (e.clientX / window.innerWidth) * 2 - 1;

        let shadow = "";
        for (let i = 1; i <= 9; i++) {
          const xOffset = i * xPos * 1.5;
          shadow += `${xOffset}px ${i}px 0 #008236${i < 9 ? ", " : ""}`;
        }

        gsap.to(textRef.current, {
          textShadow: shadow,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      const parallaxElements = gsap.utils.toArray(".parallax-img");
      parallaxElements.forEach((el, index) => {
        gsap.to(el as Element, {
          y: -150 * (index === 2 ? 1.5 : 1), // Center image moves a bit more
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: containerRef },
  );

  const handleImageLoad = () => {
    setLoadedImages((prev) => prev + 1);
  };

  return (
    <>
      {/* Loading Overlay */}
      <div
        ref={loadingRef}
        className="fixed inset-0 z-50 flex items-center justify-center bg-green-950 text-lime-400"
      >
        <div
          className={`${amarante.className} flex gap-1 p-4 text-3xl uppercase sm:gap-2 sm:text-6xl`}
        >
          {Array.from("Loading...").map((char, i) => (
            <span
              style={{ willChange: "transform" }}
              key={i}
              className={`loading-char inline-block ${
                char === " " ? "w-4 sm:w-8" : ""
              }`}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      <div
        ref={containerRef}
        className={`relative flex h-screen flex-col items-center overflow-hidden bg-linear-to-b from-slate-50 via-orange-100 to-lime-200`}
      >
        <p
          ref={textRef}
          className={`${limelight.className} pointer-events-none mt-30 scale-y-120 text-center text-7xl leading-tight text-green-400 uppercase sm:mt-24 sm:text-9xl md:mt-28 md:text-8xl lg:text-[12rem] lg:leading-60`}
          style={{
            textShadow:
              "0px 1px 0 #008236, 0px 2px 0 #008236, 0px 3px 0 #008236, 0px 4px 0 #008236, 0px 5px 0 #008236, 0px 6px 0 #008236, 0px 7px 0 #008236, 0px 8px 0 #008236, 0px 9px 0 #008236",
          }}
        >
          Nature&apos;s Finest.
        </p>
        <div
          className={`${amarante.className} pointer-events-none mt-8 flex w-full items-center justify-center gap-6 self-start px-4 text-base tracking-wide text-orange-900 sm:px-8 sm:text-lg md:px-16 md:text-2xl lg:mt-0`}
        >
          <div className="relative z-10 flex shrink-0 items-center justify-center px-4 py-2 sm:px-8 md:px-12">
            <div className="absolute inset-0 -z-10 rounded-[255px_15px_225px_15px/15px_225px_15px_255px] bg-orange-200/80"></div>
            <div className="scale-y-110 text-center font-bold">
              Grown in the Tropics. Crafted for the World.
            </div>
          </div>
        </div>
        {/* Left fruit */}
        <div className="absolute -bottom-[30%] left-[40%] h-100 w-100 -translate-x-1/2 -rotate-24 md:h-120 md:w-120 lg:h-160 lg:w-160">
          <div className="parallax-img h-full w-full">
            <Image
              src="/product-img-2.png"
              alt="hero-img"
              fill
              priority
              onLoad={handleImageLoad}
              className="object-contain"
            />
          </div>
        </div>
        {/* Right fruit */}
        <div className="absolute -bottom-[30%] left-[60%] h-100 w-100 -translate-x-1/2 rotate-24 md:h-120 md:w-120 lg:h-160 lg:w-160">
          <div className="parallax-img h-full w-full">
            <Image
              src="/product-img-3.png"
              alt="hero-img"
              fill
              priority
              onLoad={handleImageLoad}
              className="object-contain"
            />
          </div>
        </div>
        {/* Center fruit */}
        <div className="absolute -bottom-[15%] left-1/2 h-100 w-100 -translate-x-1/2 md:h-120 md:w-120 lg:h-160 lg:w-160">
          <div className="parallax-img h-full w-full">
            <Image
              src="/product-img-1.png"
              alt="hero-img"
              fill
              priority
              onLoad={handleImageLoad}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
