import Personalni from '@/components/Personalni';
import React from 'react';
import Image from 'next/image';
import image from "../../assets/images/bg2.jpg";

const Treneri = () => {
  return (
    <div className="bg-black flex flex-col">
      <div className="relative h-72 flex flex-col border-b-5 border-red-700 justify-center items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="slika"
            className="opacity-10"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-white italic border-b-5 border-red-700 text-4xl text-center md:text-6xl lg:text-7xl font-bold">
            NAŠI PERSONALNI TRENERI
          </h1>
        </div>
      </div>
      <Personalni />
    </div>
  );
};

export default Treneri;
