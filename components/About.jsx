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
    <div id="o-nama" className="bg-black flex flex-col p-12">
      <div className="grid grid-cols-2 items-center mb-12">
        <div className="h-full overflow-hidden relative border-b-5 border-red-700">
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
                className="inline-block text-black z-20 bg-red-700 hover:text-white font-semibold px-4 py-2 border-[3px] border-red-700 text-3xl max-w-max mt-4 relative group focus:outline-none transition-all duration-300 transform hover:-translate-y-1 hover:-translate-x-1 focus:-translate-y-1 focus:-translate-x-1"
                href="/galerija"
              >
                Galerija
              </Link>
              <span className="absolute w-full inset-x-0 bottom-0 h-12 border-[3px] border-red-700"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center px-6 py-12">
          <h1 className="text-red-700 text-2xl">O NAMA</h1>
          <hr className="border-[2px] border-white clipped w-16 mb-6" />
          <h1 className="text-white text-4xl font-bold mb-4">
            RebornGym | Brže, Jače, Bolje!
          </h1>
          <p className="text-base text-gray-400 italic mb-4">
            Nudimo visokokvalitetne fitnes usluge po povoljnim cenama,
            prilagođene svima. Vaš put ka boljem zdravlju nikada nije bio
            pristupačniji!
          </p>

          <div className="grid grid-cols-2 gap-2">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col py-2">
                <h1 className="text-red-700 font-semibold text-xl">
                  <FontAwesomeIcon icon={faCircleCheck} /> {service.title}
                </h1>
                <h1 className="text-gray-500 text-sm italic">
                  <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                  {service.description}
                </h1>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h1 className="text-red-700 text-2xl">Radno vreme</h1>
            <hr className="border-[2px] border-white clipped w-16 mb-6" />
            <ul className="text-gray-500">
              {workHours.map((item, index) => (
                <li key={index}>
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
                  className="text-red-700 text-xl mr-2"
                />
                <span>Kneza Mihajla 39-29, Smederevo 11300</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
