import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import ProductCard from "@/components/ProductCard";

const jakarta = Plus_Jakarta_Sans({
  weight: "700",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="bg-[#FDEAF0] min-h-screen px-4">
      <Navbar />
      <section className="mt-8">
        <div>
          <img src="Hero.png" alt="" />
        </div>
      </section>
      <section className=" mt-8">
        <div
          className={`${jakarta.className} + text-black text-3xl font-bold leading-none`}
        >
          Cherish your Special Occasion with customized Cakes from Dulcet
          Cupcakes.
        </div>
        <div
          className={`${inter.className} + text-slate-600 text-2xl tracking-wide mt-6`}
        >
          We provide customized cake for every occasion in and around Ranchi,
          Jharkhand.
        </div>
        <div className="mt-4 text-[#F8DAE8] font-semibold inline-block rounded-md  bg-[#A11055] px-8 py-2 w-contain ">
          <button>GET YOURS NOW</button>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-2 mt-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </section>
    </main>
  );
}
