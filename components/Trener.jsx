import Image from "next/image";
import slika from "../assets/images/treneri.jpg";
import bg from "../assets/images/bg.jpg";
import shape from "../assets/images/shape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faHandFist,
  faLaptop,
  faRunning,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const services = [
  { icon: faLaptop, text: "Online konsultacije" },
  { icon: faUtensils, text: "Personalizovan plan ishrane" },
  { icon: faRunning, text: "Transformacija tela" },
  { icon: faHandFist, text: "Trening boksa/kikboksa" },
];

const Trener = () => {
  return (
    <div className="bg-black relative overflow-hidden flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 z-50 py-12 md:py-24 px-12 md:px-24">
        {/* Slika i Shape */}
        <div className="relative order-2 md:order-1">
          <div className="h-[25rem] md:h-[40rem] mr-0 md:mr-24 mb-12 md:mb-24 md:border-[2px] border-red-700 overflow-hidden relative">
            <Image
              src={slika}
              alt="slika"
              layout="fill"
              objectFit="cover"
              className="saturate-0 hover:saturate-100 transition-all md:mt-0 mt-12 duration-500"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className="absolute bottom-[-3rem] md:bottom-[-6rem] right-0 z-0">
            <Image src={shape} alt="shape" width={450} height={150} />
          </div>
        </div>
        {/* Tekst */}
        <div className="flex flex-col order-1 md:order-2">
          <hr className="border-[6px] border-red-700 w-32" />
          <br />
          <h1 className="text-white font-bold text-5xl md:text-6xl">PERSONALNI TRENINZI</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 text-base md:text-base gap-2 my-8 md:my-12">
            {services.map((service, index) => (
              <div key={index} className="px-4 py-2 text-white bg-red-700 clipped">
                <FontAwesomeIcon icon={service.icon} /> <span className="italic">{service.text}</span>
              </div>
            ))}
          </div>

          <p className="text-white text-base md:text-left text-center md:text-lg italic">
            <FontAwesomeIcon icon={faAngleRight} className="text-red-600" />{" "}
            Nudimo personalne treninge prilagođene isključivo vama. Naši stručni
            treneri će vam pružiti nepodeljenu pažnju i podršku, prateći vaš
            napredak korak po korak. Sa personalizovanim programom vežbanja i
            ishrane, zajedno ćemo stvoriti put ka vašem optimalnom fizičkom i
            mentalnom blagostanju.
          </p>
          <div className="relative md:mx-0 mx-auto max-w-max">
            <Link
              className="inline-block bg-black z-20 hover:bg-red-700 hover:text-white hover:font-semibold px-4 py-2 border border-red-700 text-red-700 text-xl max-w-max mt-4 relative group focus:outline-none transition-all duration-300 transform hover:-translate-y-1 hover:-translate-x-1 focus:-translate-y-1 focus:-translate-x-1"
              href="/treneri"
            >
              Vidi Trenere
            </Link>
            <span className="absolute w-full inset-x-0 bottom-0 h-10 border border-red-700"></span>
          </div>
        </div>
      </div>
      <Image
        src={bg}
        alt="bg"
        objectFit="cover"
        className="absolute opacity-[10%]"
      />
    </div>
  );
};

export default Trener;
