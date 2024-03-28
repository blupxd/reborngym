"use client"
import Image from "next/image";
import CountUp from "react-countup";
import slika from "../assets/images/slika1.jpg";
import Link from "next/link";

const Hero = () => {
  const heroInfo = [
    {
      count: 250,
      label: "Aktivnih vežbača",
    },
    {
      count: 3,
      label: "Personalna trenera",
    },
    {
      count: 7,
      label: "Godina postojanja",
    },
  ];

  return (
    <div className="w-full mt-12 grid grid-cols-1 md:grid-cols-2 bg-black">
      <div className="flex md:mt-0 mt-12 flex-col justify-center p-6 md:p-12">
        <h1 className="font-extrabold md:text-left text-center text-red-700 text-7xl mb-12">
          REBORN GYM
        </h1>
        <h1 className="text-5xl md:text-4xl lg:text-6xl text-center md:text-left text-white font-extrabold">
          JAČI. BRŽI. BOLJI. BEZ IZGOVORA.
        </h1>
        <hr className="md:ml-0 ml-16 w-28 border-[5px] border-red-700" />
        <p className="text-base mt-6 font-thin md:text-left text-center text-gray-600">
          <span className="text-red-700 italic">RebornGym</span> - gde se rađa
          snaga!
        </p>
        <div className="max-w-lg flex md:flex-row flex-col items-center gap-4 md:mt-8 lg:mt-10">
          <div className="relative max-w-max mt-12 md:mt-0 ">
            <Link
              className="inline-block bg-black z-20 hover:bg-red-700 hover:text-white hover:font-semibold px-4 w-96 py-2 border border-red-700 text-red-700 text-base lg:text-xl max-w-max mt-4 relative transition-all duration-300 transform hover:-translate-y-1 hover:-translate-x-1 focus:-translate-y-1 focus:-translate-x-1"
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
      <div className="h-full md:block hidden overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <Image src={slika} alt="slika" />
      </div>
      <hr className="border col-span-2 mt-12 border-red-700 mx-auto w-64" />
      <div className="grid col-span-2 grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 px-6 md:px-32 py-12">
        {heroInfo.map(({ count, label }, index) => (
          <div key={index} className="flex clipped items-center px-8 bg-red-700 font-bold text-xl">
            <h1 className="text-black font-semibold italic flex items-center gap-2">
              <span className="text-4xl text-white w-24">
                <CountUp start={0} end={count} duration={5} />+
              </span>{" "}
              {label}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
