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
const Trener = () => {
  return (
    <div className="bg-black relative overflow-hidden flex flex-col">
      <div className="grid grid-cols-2 z-50 py-12 px-12">
        <div className=" relative">
          <div className="h-[35rem] mr-24 mb-24 border-[2px] border-red-700 overflow-hidden relative">
            <Image
              src={slika}
              alt="slika"
              layout="fill"
              objectFit="cover"
              className="saturate-0 hover:saturate-100 transition-all duration-500"
              style={{ zIndex: 1 }}
            />
          </div>
          <div className="absolute bottom-[-3rem] right-0 z-0">
            <Image src={shape} alt="shape" width={450} height={150} />
          </div>
        </div>
        <div className="flex flex-col">
          <hr className="border-[6px] border-red-700 w-32" />
          <br />
          <h1 className="text-white font-bold text-6xl">PERSONALNI TRENINZI</h1>
          <div className="grid grid-cols-2 text-lg gap-2 my-12">
            <div className="px-4 py-2 text-white bg-red-700 clipped">
              <FontAwesomeIcon icon={faLaptop} />{" "}
              <span className="italic">Online konsultacije</span>
            </div>
            <div className="px-4 py-2 text-white bg-red-700 clipped">
              <FontAwesomeIcon icon={faUtensils} />{" "}
              <span className="italic">Personalizovan plan ishrane</span>
            </div>
            <div className="px-4 py-2 text-white bg-red-700 clipped">
              <FontAwesomeIcon icon={faRunning} />{" "}
              <span className="italic">Transformacija tela</span>
            </div>
            <div className="px-4 py-2 text-white bg-red-700 clipped">
              <FontAwesomeIcon icon={faHandFist} />{" "}
              <span className="italic">Trening boksa/kikboksa</span>
            </div>
          </div>

          <p className="text-white text-lg italic">
            <FontAwesomeIcon icon={faAngleRight} className="text-red-600" />{" "}
            Nudimo personalne treninge prilagođene isključivo vama. Naši stručni
            treneri će vam pružiti nepodeljenu pažnju i podršku, prateći vaš
            napredak korak po korak. Sa personalizovanim programom vežbanja i
            ishrane, zajedno ćemo stvoriti put ka vašem optimalnom fizičkom i
            mentalnom blagostanju.
          </p>
          <div className="relative max-w-max">
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
