import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#FDEAF0] min-h-screen px-4">
      <Navbar />
      <section className="mt-8">
        <div>
          <img src="Hero.png" alt="" />
        </div>
      </section>
    </main>
  );
}
