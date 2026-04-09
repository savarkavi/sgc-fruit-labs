import Image from "next/image";
import { products } from "@/lib/constants";

const randomDescriptions = [
  "Experience a burst of fresh flavors with every crunchy bite, naturally sweet and utterly delicious.",
  "Savour the rich, sun-ripened taste enhanced with our unique probiotic infusions.",
  "Delight in the wholesome goodness of carefully sourced, clean ingredients perfectly balanced for you.",
];

const Products = () => {
  return (
    <section className="flex min-h-screen flex-col items-center bg-[#f2ebd0] py-16 md:py-24">
      <p
        className={`scale-y-110 text-center text-5xl tracking-wide text-[#8C5430] uppercase sm:text-6xl md:text-8xl`}
        style={{
          textShadow:
            "0px 1px 0 #2B1B12, 0px 2px 0 #2B1B12, 0px 3px 0 #2B1B12, 0px 4px 0 #2B1B12, 0px 5px 0 #2B1B12, 0px 6px 0 #2B1B12, 0px 7px 0 #2B1B12, 0px 8px 0 #2B1B12, 0px 9px 0 #2B1B12",
        }}
      >
        Our Products
      </p>
      <p className="mt-6 mb-12 text-base tracking-widest text-[#2B1B12] uppercase md:mt-8 md:mb-16 md:text-xl">
        Shop our collections
      </p>

      <div className="mt-4 flex w-full max-w-350 flex-wrap justify-center gap-10 px-4 sm:px-6 md:justify-between md:gap-16 md:px-8">
        {products.map((product, index) => (
          <div key={index} className="flex w-full max-w-xs flex-col items-center sm:w-80">
            <div className="relative mb-6 h-72 w-full transition-transform duration-500 hover:scale-110 hover:-rotate-3 sm:h-80">
              <Image
                src={`/${product.image}.png`}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <h3 className="text-center text-2xl font-black tracking-wider text-[#2B1B12] uppercase sm:text-3xl">
              {product.name}
            </h3>

            <p className="mt-4 min-h-16 text-center text-sm leading-relaxed font-medium text-[#2B1B12]/80 sm:text-base">
              {randomDescriptions[index % randomDescriptions.length]}
            </p>

            <button className="mt-8 cursor-pointer rounded-full border-2 border-[#2B1B12] bg-transparent px-8 py-3 text-lg font-black tracking-widest text-[#2B1B12] uppercase transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:bg-[#2B1B12] hover:text-[#f2ebd0] hover:shadow-[6px_6px_0px_#8C5430]">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
