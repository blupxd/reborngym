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
import cile from "../assets/treneri/cile.jpg";
import shape from "../assets/images/shape.png";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import trainers from "./treneri.json";

const TrainerCard = ({
  name,
  titula,
  services,
  instagram,
  mobilni,
  mail,
  index,
}) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-12 gap-12">
      <div className={`flex items-center justify-center ${isEvenIndex ? "" : "md:flex-col-reverse"}`}>
        <div className="relative w-[30rem]">
          <div className={`h-[20rem] md:h-[32rem] mb-12 md:mb-24 clipped z-50 border-b-[15px] md:border-y-[15px] border-red-700 overflow-hidden relative ${isEvenIndex ? "mr-0 md:mr-24" : "md:mr-0 ml-0 md:ml-32"}`}>
            <Image
              src={cile}
              alt="slika"
              layout="fill"
              objectFit="cover"
              className="transition-all duration-500"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className={`absolute bottom-[-2rem] md:bottom-[-4rem] z-0 ${isEvenIndex ? "right-0" : "left-0"}`}>
            <Image src={shape} alt="shape" width={400} height={100} />
          </div>
        </div>
      </div>

      <div className="flex flex-col text-gray-600">
        <h1 className="bg-red-700 max-w-max px-4 clipped py-2 text-gray-300 font-bold italic text-4xl mb-4">
          {name}
          <br />
          {titula && (
            <span className="text-sm font-bold text-amber-500">
              <FontAwesomeIcon icon={faTrophy} /> {titula}
            </span>
          )}
        </h1>
        <h1 className="text-4xl italic text-white font-semibold">USLUGE</h1>
        <hr className="border-[2px] w-16 border-red-700 clipped" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-red-700 border-b-[5px] border-red-950 text-white italic px-4 py-2 clipped"
            >
              <h2 className="text-sm font-semibold">
                <FontAwesomeIcon icon={faCheckDouble} /> {service}
              </h2>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-4 text-white">
          <Link href={`https://www.instagram.com/${instagram}`}>
            <FontAwesomeIcon className="text-red-700" icon={faInstagram} />{" "}
            {instagram}
          </Link>
          <Link href={`tel:${mobilni}`}>
            <FontAwesomeIcon className="text-red-700" icon={faPhone} />{" "}
            {mobilni}
          </Link>
          <Link href={`mailto:${mail}`}>
            <FontAwesomeIcon className="text-red-700" icon={faEnvelope} />{" "}
            {mail}
          </Link>
        </div>
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
          titula={trainer.titula}
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
