import { amarante } from "@/fonts/fonts";

export const Email = () => {
  return (
    <div
      className={`${amarante.className} mt-8 flex w-full max-w-xl flex-col items-center px-4`}
    >
      <h2 className="mb-8 text-center text-xl tracking-wide text-[#2B1B12]">
        Contact us to buy products and for latest updates.
      </h2>
      <form className="flex w-full flex-col gap-6">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-2xl border-2 border-[#ca8a04] bg-transparent px-6 py-4 text-xl text-[#2B1B12] placeholder-[#ca8a04]/80 transition-all outline-none focus:-translate-x-1 focus:-translate-y-1 focus:border-[#ca8a04] focus:shadow-[4px_4px_0px_#a16207]"
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="w-full resize-none rounded-2xl border-2 border-[#ca8a04] bg-transparent px-6 py-4 text-xl text-[#2B1B12] placeholder-[#ca8a04]/80 transition-all outline-none focus:-translate-x-1 focus:-translate-y-1 focus:border-[#ca8a04] focus:shadow-[4px_4px_0px_#a16207]"
        ></textarea>

        <button
          type="button"
          className="mt-4 cursor-pointer self-center rounded-full border-2 border-[#ca8a04] bg-transparent px-10 py-3 text-lg font-black tracking-widest text-[#ca8a04] uppercase transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:bg-[#ca8a04] hover:text-[#f2ebd0] hover:shadow-[6px_6px_0px_#a16207]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
