import Image from "next/image";
import Link from "next/link";
import { Email } from "./email";
import { amarante } from "@/fonts/fonts";

const Footer = () => {
  return (
    <footer className="flex min-h-screen flex-col items-center justify-between bg-[#f2ebd0] pt-10 pb-6">
      <div className="flex w-full flex-col items-center">
        <div className="relative h-20 w-20 sm:h-30 sm:w-30">
          <Image
            src="/logoipsum.svg"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
        <Email />
      </div>

      <div
        className={`flex w-full max-w-6xl flex-col items-center justify-between gap-6 border-t-2 border-[#ca8a04]/30 px-4 py-6 md:flex-row md:gap-8 md:px-8 md:py-8`}
      >
        <p
          className={`${amarante.className} scale-y-150 text-3xl tracking-wide text-amber-600 uppercase sm:text-4xl md:text-5xl lg:text-7xl`}
          style={{
            textShadow:
              "0px 1px 0 #2B1B12, 0px 2px 0 #2B1B12, 0px 3px 0 #2B1B12, 0px 4px 0 #2B1B12, 0px 5px 0 #2B1B12, 0px 6px 0 #2B1B12, 0px 7px 0 #2B1B12, 0px 8px 0 #2B1B12",
          }}
        >
          SGC Fruit Labs
        </p>

        <nav className="flex scale-y-110 flex-wrap justify-center gap-4 text-sm tracking-widest text-[#2B1B12] uppercase sm:gap-6 md:gap-10 md:text-lg">
          <Link href="#" className="transition-colors hover:text-[#ca8a04]">
            Products
          </Link>
          <Link href="#" className="transition-colors hover:text-[#ca8a04]">
            Vision
          </Link>
          <Link href="#" className="transition-colors hover:text-[#ca8a04]">
            About Us
          </Link>
          <Link href="#" className="transition-colors hover:text-[#ca8a04]">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
