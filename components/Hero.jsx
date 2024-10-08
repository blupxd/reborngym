"use client";
import Image from "next/image";
import CountUp from "react-countup";
import slika from "../assets/images/slika1.jpg";
import Link from "next/link";
import logo from "../assets/images/logo.png";
import ScrollRevealAnimation from "./ScrollReveal";
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
    <div className="w-full relative grid grid-cols-1 md:grid-cols-2 bg-black">
      <div
        style={{ zIndex: 50 }}
        className="flex md:mt-0 mt-12 flex-col justify-center p-6 md:p-12"
      >
        <ScrollRevealAnimation>
          <Image
            src={logo}
            width={250}
            className="mb-6 md:mx-0 mx-auto"
            alt="logo"
          />
        </ScrollRevealAnimation>
        <ScrollRevealAnimation delay={0.4}>
          <div className="flex flex-col md:items-start items-center">
            <h1 className="text-5xl lg:text-6xl italic text-center md:text-left text-white font-extrabold">
              JAČI. BRŽI. BOLJI. BEZ IZGOVORA.
            </h1>
            <hr className="ml-0 w-28 border-[5px] border-red-700" />
          </div>
          <p className="text-lg mt-6 md:text-left text-center text-gray-600">
            <span className="text-red-700 italic">RebornGym</span> - gde se rađa
            snaga!
          </p>
          <div className="flex md:flex-row flex-col gap-6 items-center">
            <div className="relative max-w-max mt-2 md:mt-0 ">
              <Link
                className="inline-block bg-black z-20 hover:bg-red-700 hover:text-white hover:font-semibold px-4 py-2 border border-red-700 text-red-700 text-base lg:text-xl max-w-max mt-4 relative transition-all duration-300 transform hover:-translate-y-1 hover:-translate-x-1 focus:-translate-y-1 focus:-translate-x-1"
                href="/#cenovnik"
              >
                Učlani se!
              </Link>
              <span className="absolute w-full inset-x-0 bottom-0 h-10 border border-red-700"></span>
            </div>
            <h2 className="text-gray-600 italic text-base mt-4">
              Zašto ne bi promenio sebe?
            </h2>
          </div>
        </ScrollRevealAnimation>
      </div>
      <div className="md:block hidden overflow-hidden w-full relative">
        <div className="absolute z-10 inset-0 bg-gradient-to-r from-black to-transparent"></div>
        <Image src={slika} alt="slika" fill className="object-cover " />
      </div>

      <div className="z-10 bg-black grid col-span-2 grid-cols-1 xl:grid-cols-3 gap-16 px-6 mt-12 md:px-32 py-12">
        <hr className="border col-span-1 xl:col-span-3 mt-6 border-red-700 mx-auto w-64" />

        {heroInfo.map(({ count, label }, index) => (
          <ScrollRevealAnimation key={index} delay={index*0.35}>
            <div
              
              className="flex clipped items-center px-8 bg-red-700 font-bold text-xl"
            >
              <h3 className="text-black p-2 font-semibold italic flex items-center max-w-max gap-2">
                <span className="text-4xl text-white w-24">
                  <CountUp start={0} end={count} duration={5} />+
                </span>{" "}
                {label}
              </h3>
            </div>
          </ScrollRevealAnimation>
        ))}
      </div>
      <Image
        src={slika}
        alt="slika"
        fill
        className="md:hidden object-cover block w-full opacity-20 absolute top-0"
      />
    </div>
  );
};

export default Hero;
