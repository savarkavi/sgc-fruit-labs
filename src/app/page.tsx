import About from "@/components/about";
import Features from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero";
import Products from "@/components/products";
import Science from "@/components/science";
import Marquee from "@/components/ui/Marquee";
import MarqueeTwo from "@/components/ui/MarqueeTwo";
import { anton } from "@/fonts/fonts";

export default function Home() {
  return (
    <div className={`${anton.className}`}>
      <HeroSection />
      <Marquee />
      <Features />
      <Products />
      <Science />
      <MarqueeTwo />
      <About />
      <Footer />
    </div>
  );
}
