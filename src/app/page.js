import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Inter } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({
  weight: "600",
  subsets: ["latin"],
});

const inter = Inter({
  weight: "500",
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
        <div className={`${jakarta.className} + text-black text-4xl`}>
          Cherish your Special Occasion with customized Cakes from Dulcet
          Cupcakes.
        </div>
        <div
          className={`${inter.className} + text-slate-600 text-3xl tracking-loose mt-6`}
        >
          We provide customized cake for every occasion in and around Ranchi,
          Jharkhand.
        </div>
        <div className="mt-4 text-[#F8DAE8] font-semibold inline-block rounded-tl-full rounded-br-full bg-[#A11055] px-8 py-2 w-contain">
          <button>GET YOURS NOW</button>
        </div>
      </section>
    </main>
  );
}
