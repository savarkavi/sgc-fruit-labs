"use client";

import { anton } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Products", href: "#" },
  { label: "Vision", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
];

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
        setMenuOpen(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`${anton.className} fixed top-0 z-50 w-full transition-all duration-200 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled || menuOpen ? "bg-slate-50" : "bg-transparent"}`}
    >
      <div className="mx-auto w-full max-w-350 border-b border-orange-600 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 sm:h-14 sm:w-14">
              <Image
                src="/logoipsum.svg"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="scale-y-150 text-xl text-green-600 uppercase sm:text-3xl">
              SGC Fruit Labs
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden scale-y-110 items-center gap-8 text-lg tracking-widest uppercase md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-orange-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Nav */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-64" : "max-h-0"
        } ${isScrolled || menuOpen ? "bg-slate-50" : "bg-transparent"}`}
      >
        <nav className="flex flex-col items-start gap-4 px-6 py-4 tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg transition-colors hover:text-orange-600"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
