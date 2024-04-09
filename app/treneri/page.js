import Personalni from "@/components/Personalni";
import React from "react";
import Image from "next/image";
import image from "../../assets/images/bg2.jpg";
import ScrollOpacity from "@/components/ScrollOpacity";
import ScrollRevealAnimation from "@/components/ScrollReveal";
export const metadata = {
  title: 'Reborn Gym | Treneri',
}
const Treneri = () => {
  return (
    <div className="bg-black flex flex-col">
      <div className="relative h-72 flex flex-col justify-center items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="slika"
            style={{
              objectFit: "cover",
            }}
            className="opacity-10"
            fill
          />
        </div>
        <div className="relative flex flex-col md:items-center items-center z-10">
          <ScrollOpacity direction={"left"} delay={0.5}>
            <hr className="border-[5px] md:mx-0 mx-auto w-64 border-red-700 clipped" />
          </ScrollOpacity>
          <ScrollRevealAnimation delay={0.4}>
            <h1 className="text-white italic mt-2 text-4xl text-center md:text-6xl lg:text-7xl font-bold">
              NAŠI PERSONALNI TRENERI
            </h1>
          </ScrollRevealAnimation>
        </div>
      </div>
      <Personalni />
    </div>
  );
};

export default Treneri;
