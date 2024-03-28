import Hero from "@/components/Hero";
import Image from "next/image";
import fitpass from "../assets/images/fitpass.jpg";
import Trener from "@/components/Trener";
import Cenovnik from "@/components/Cenovnik";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <div className="w-full bg-black py-24">
        <div className="flex mx-12 items-center gap-4">
          <Image
            src={fitpass}
            className="clipped border-b-[5px] w-96 border-red-700"
            alt="fitpass"
          />
          <div className="flex flex-col p-2 gap-6">
            <h1 className="text-white font-bold italic text-3xl">
              Osetite slobodu izbora uz našu teretanu koja podržava FitPass
              aplikaciju!{" "}
            </h1>
            <p className="text-wrap text-gray-600 text-md">
              Sa FitPass-om, imate pristup raznovrsnim treninzima i teretanama
              širom grada. Pružamo vam fleksibilnost i mogućnost da prilagodite
              svoj fitness plan vašim potrebama i rasporedu. Pridružite nam se
              danas i iskusite sve što naša teretana ima da ponudi uz FitPass!
            </p>
          </div>
        </div>
      </div>
      <Trener />
      <Cenovnik />
      <About />
    </main>
  );
}
