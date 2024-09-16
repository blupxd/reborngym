import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckDouble,
  faEnvelope,
  faPhone,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import shape from "../assets/images/shape.png";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import trainers from "./treneri.json";
import ScrollOpacity from "./ScrollOpacity";
import ScrollRevealAnimation from "./ScrollReveal";

const TrainerCard = ({
  name,
  slika,
  services,
  instagram,
  mobilni,
  mail,
  index,
}) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-12 gap-12 h-full">
      <div
        className={`flex items-center justify-center ${
          isEvenIndex ? "" : "md:flex-col-reverse"
        }`}
      >
        <div className="relative w-[30rem]">
          <ScrollOpacity direction={"left"} delay={0.5}>
            <div
              className={`h-[28rem] lg:h-[36rem] mb-12 md:mb-24 clipped z-50 border-b-[15px] md:border-y-[15px] border-red-700 overflow-hidden relative ${
                isEvenIndex ? "mr-0 md:mr-24" : "md:mr-0 ml-0 md:ml-32"
              }`}
            >
              <Image
                src={slika}
                alt="slika"
                fill
                className="transition-all duration-500"
                style={{ zIndex: 1, objectFit: "cover" }}
              />
            </div>
            <div
              className={`absolute bottom-[-2rem] md:bottom-[-4rem] z-0 ${
                isEvenIndex ? "right-0" : "left-0"
              }`}
            >
              <Image src={shape} alt="shape" width={400} height={100} />
            </div>
          </ScrollOpacity>
        </div>
      </div>

      <div className="flex flex-col text-gray-600">
        <ScrollOpacity direction={"left"} delay={0.5}>
          <h1 className="bg-red-700 max-w-max px-12 text-white clipped py-2 font-bold italic text-4xl mb-4">
            {name}
          </h1>
        </ScrollOpacity>
        <ScrollOpacity direction={"left"} delay={0.6}>
          <h1 className="text-4xl italic text-white font-semibold">USLUGE</h1>
        </ScrollOpacity>
        <ScrollOpacity direction={"left"} delay={0.3}>
          <hr className="border-[2px] w-16 border-red-700 clipped" />
        </ScrollOpacity>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {services.map((service, index) => (
            <ScrollOpacity direction={"left"} delay={index * 0.4} key={index}>
              <div className="bg-red-700 border-b-[5px] border-red-950 text-white italic px-12 md:px-6 py-2 clipped">
                <h2 className="text-sm font-semibold">
                  <FontAwesomeIcon icon={faCheckDouble} /> {service}
                </h2>
              </div>
            </ScrollOpacity>
          ))}
        </div>
        <ScrollRevealAnimation delay={0.5}>
          <div className="flex flex-col mt-4 text-white">
            <Link className='max-w-max' href={`https://www.instagram.com/${instagram}`}>
              <FontAwesomeIcon className="text-red-700" icon={faInstagram} />{" "}
              {instagram}
            </Link>
            <Link className='max-w-max' href={`tel:${mobilni}`}>
              <FontAwesomeIcon className="text-red-700" icon={faPhone} />{" "}
              {mobilni}
            </Link>
            <Link className='max-w-max' href={`mailto:${mail}`}>
              <FontAwesomeIcon className="text-red-700" icon={faEnvelope} />{" "}
              {mail}
            </Link>
          </div>
        </ScrollRevealAnimation>
        <ScrollOpacity direction={"left"} delay={0.3}>
          <div className="relative max-w-max mt-6">
            <Link
              className="inline-block bg-black z-20 hover:bg-white hover:text-black hover:font-semibold px-4 py-2 border border-white text-white text-base lg:text-xl max-w-max mt-4 relative transition-all duration-300 transform hover:-translate-y-1 hover:-translate-x-1 focus:-translate-y-1 focus:-translate-x-1"
              href={`mailto:${mail}`}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Kontakt
            </Link>
            <span className="absolute w-full inset-x-0 bottom-0 h-10 border border-white"></span>
          </div>
        </ScrollOpacity>
      </div>
    </div>
  );
};

const Personalni = () => {
  return (
    <div>
      {trainers.map((trainer, index) => (
        <TrainerCard
          key={index}
          index={index} // Dodajte indeks ovde
          name={trainer.name}
          slika={trainer.slika}
          services={trainer.services}
          instagram={trainer.instagram}
          mobilni={trainer.mobilni}
          mail={trainer.mail}
        />
      ))}
    </div>
  );
};

export default Personalni;
