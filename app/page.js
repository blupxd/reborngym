import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import fitpass from "../assets/images/fitpass.jpg";
import Trener from "@/components/Trener";
import Cenovnik from "@/components/Cenovnik";
import About from "@/components/About";
import ScrollOpacity from "@/components/ScrollOpacity";
import ScrollRevealAnimation from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <div className="w-full bg-black py-24">
        <div className="grid md:grid-cols-2 grid-cols-1 mx-0 md:mx-12 items-center gap-4">
          <ScrollOpacity direction={"left"}>
            <Image
              src={fitpass}
              className="clip border-r-[5px] object-cover border-red-700"
              alt="fitpass"
            />
          </ScrollOpacity>

          <div className="flex flex-col p-6 md:p-2 gap-6">
            <ScrollRevealAnimation>
              <h1 className="text-white font-bold italic text-3xl md:text-3xl">
                FitPass Partner{" "}
              </h1>
            </ScrollRevealAnimation>
            <ScrollOpacity direction={"right"}>
            <p className="text-wrap text-gray-500 md:text-base text-xl">
              Sa FitPass-om, imate pristup raznovrsnim treninzima i teretanama
              širom grada. Pružamo vam fleksibilnost i mogućnost da prilagodite
              svoj fitness plan vašim potrebama i rasporedu. Pridružite nam se
              danas i iskusite sve što naša teretana ima da ponudi uz FitPass!
            </p>
            </ScrollOpacity>
            <ScrollRevealAnimation delay={0.5}>
            <div className="relative max-w-max">
              <Link
                className="inline-block bg-black z-20 hover:bg-red-700 hover:text-white hover:font-semibold px-4 py-2 border border-red-700 text-red-700 text-base lg:text-xl max-w-max mt-4 relative transition-all duration-300 transform hover:-translate-y-1 hover:-translate-x-1 focus:-translate-y-1 focus:-translate-x-1"
                href="https://fitpass.rs/"
              >
                Vidi Fitpass
              </Link>
              <span className="absolute w-full inset-x-0 bottom-0 h-10 border border-red-700"></span>
            </div>
            </ScrollRevealAnimation>
          </div>
        </div>
      </div>
      <Trener />
      <Cenovnik />
      <About />
    </main>
  );
}
