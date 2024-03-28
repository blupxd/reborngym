import Image from "next/image";
import image from "../assets/images/image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faCircleCheck,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const services = [
  {
    title: "NAJNOVIJA OPREMA",
    description:
      "Naša teretana je opremljena najnovijim i najkvalitetnijim spravama",
  },
  {
    title: "NAJBOLJI TRENERI",
    description:
      "Naš tim čine iskusni i sertifikovani treneri spremni da vam pomognu da dostignete svoje ciljeve",
  },
  {
    title: "ODLIČNA ATMOSFERA",
    description:
      "U našoj teretani vas čeka prijatna atmosfera koja će vas motivisati na vrhunske rezultate",
  },
  {
    title: "DOBRA MUZIKA",
    description:
      "Uživajte u energičnoj muzici koja će vam pomoći da ostanete motivisani tokom treninga",
  },
];

const workHours = [
  { day: "Ponedeljak - Petak", hours: "08:00 - 22:00" },
  { day: "Subota", hours: "09:00 - 20:00" },
  { day: "Nedelja", hours: "12:00 - 20:00" },
];

const About = () => {
  return (
    <div id="o-nama" className="bg-black flex flex-col p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <div className="flex flex-col justify-center px-6 py-12 md:order-2">
          <h1 className="text-red-700 text-xl md:text-2xl">O NAMA</h1>
          <hr className="border-[2px] border-white w-16 mb-6" />
          <h1 className="text-white text-4xl font-bold mb-4">RebornGym</h1>
          <p className="text-base md:text-lg text-gray-500 italic mb-4">
            Nudimo visokokvalitetne fitnes usluge po povoljnim cenama,
            prilagođene svima. Vaš put ka boljem zdravlju nikada nije bio
            pristupačniji!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col py-2">
                <h1 className="text-red-700 font-semibold text-base md:text-xl">
                  <FontAwesomeIcon icon={faCircleCheck} /> {service.title}
                </h1>
                <h1 className="text-gray-500 text-sm md:text-base italic">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                  {service.description}
                </h1>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h1 className="text-red-700 text-xl md:text-2xl">Radno vreme</h1>
            <ul className="text-gray-500">
              {workHours.map((item, index) => (
                <li key={index} className="mb-2 md:mb-0">
                  <FontAwesomeIcon
                    icon={faAngleDoubleRight}
                    className="text-red-700 mr-2"
                  />
                  {item.day}: {item.hours}
                </li>
              ))}
              <li>
                <FontAwesomeIcon
                  icon={faMapLocation}
                  className="text-red-700 text-lg md:text-xl mr-2"
                />
                <span>Kneza Mihajla 39-29, Smederevo 11300</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-80 md:h-full relative border-b-5 border-red-700 md:order-1">
          <Image
            src={image}
            alt="Slika"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="saturate-0 clipped"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative max-w-max">
              <Link
                className="inline-block text-black z-20 bg-red-700 hover:text-white font-semibold px-4 py-2 border-[3px] border-red-700 text-xl max-w-max mt-4 relative group focus:outline-none transition-all duration-300 transform hover:-translate-y-1 hover:-translate-x-1 focus:-translate-y-1 focus:-translate-x-1"
                href="/galerija"
              >
                Galerija
              </Link>
              <span className="absolute w-full inset-x-0 bottom-0 h-12 border-[3px] border-red-700"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
