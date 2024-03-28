"use client";
import Image from "next/image";
import CountUp from "react-countup";
import slika from "../assets/images/slika1.jpg";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="w-full grid grid-cols-2 bg-black">
      <div className="flex flex-col justify-center p-12">
        <h1 className="font-extrabold text-red-700 text-7xl mb-12">
          REBORN GYM
        </h1>
        <h1 className="text-6xl text-white font-extrabold">
          JAČI. BRŽI. BOLJI. BEZ IZGOVORA.
        </h1>

        <hr className="w-28 border-[5px] border-red-700" />
        <p className="text-base mt-6 font-thin text-gray-600">
          <span className="text-red-700 italic">RebornGym</span> - gde se rađa
          snaga!
        </p>
        <div className="max-w-lg flex items-center gap-4 md:mt-8 lg:mt-10">
          <div className="relative max-w-max">
            <Link
              className="inline-block bg-black z-20 hover:bg-red-700 hover:text-white hover:font-semibold px-4 py-2 border border-red-700 text-red-700 text-xl max-w-max mt-4 relative group focus:outline-none transition-all duration-300 transform hover:-translate-y-1 hover:-translate-x-1 focus:-translate-y-1 focus:-translate-x-1"
              href="/#cenovnik"
            >
              Učlani se!
            </Link>
            <span className="absolute w-full inset-x-0 bottom-0 h-10 border border-red-700"></span>
          </div>
          <h1 className="text-gray-600 font-thin italic text-sm mt-4">
            Zašto ne bi promenio sebe?
          </h1>
        </div>
      </div>
      <div className="h-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <Image src={slika} alt="slika" />
      </div>
      <hr className="border col-span-2 mt-12 border-red-700 mx-auto w-64" />
      <div className="grid col-span-2 grid-cols-3 gap-32 px-32 py-12">
        <div className="flex items-center px-8 bg-red-700 text-xl">
          <h1 className="text-black font-semibold italic flex items-center gap-2">
            <span className="text-4xl text-white w-24">
              <CountUp start={0} end={250} duration={5} />+
            </span>{" "}
            Aktivnih vežbača
          </h1>
        </div>
        <div className="flex items-center px-8 bg-red-700 text-xl">
          <h1 className="text-black font-semibold italic flex items-center gap-2">
            <span className="text-4xl text-white w-24">
              <CountUp start={0} end={3} duration={5} />
            </span>{" "}
            Personalna trenera
          </h1>
        </div>
        <div className="flex items-center px-8 bg-red-700 text-xl">
          <h1 className="text-black font-semibold italic flex items-center gap-2">
            <span className="text-4xl text-white w-24">
              <CountUp start={0} end={7} duration={5} />
            </span>{" "}
            Godina postojanja
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
