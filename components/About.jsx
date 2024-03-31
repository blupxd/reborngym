import Image from "next/image";
import image from "../assets/images/image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faCircleCheck,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ScrollOpacity from "./ScrollOpacity";
import ScrollRevealAnimation from "./ScrollReveal";

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
          <ScrollOpacity direction={"left"} delay={0.4}>
            <h1 className="text-red-700 text-xl md:text-2xl">O NAMA</h1>
          </ScrollOpacity>
          <ScrollOpacity delay={0.8} direction={"left"}>
            <hr className="border-[2px] border-red-600 w-16 mb-6 clipped" />
          </ScrollOpacity>
          <ScrollRevealAnimation>
            <h1 className="text-white text-5xl md:text-4xl font-bold mb-4">
              RebornGym
            </h1>
          </ScrollRevealAnimation>
          <ScrollRevealAnimation delay={0.6}>
            <p className="text-xl text-gray-500 italic mb-4">
              Nudimo visokokvalitetne fitnes usluge po povoljnim cenama,
              prilagođene svima. Vaš put ka boljem zdravlju nikada nije bio
              pristupačniji!
            </p>
          </ScrollRevealAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <ScrollOpacity key={index} direction={"left"} delay={index * 0.4}>
                <div className="flex flex-col py-2">
                  <h1 className="text-red-700 font-semibold text-lg md:text-xl">
                    <FontAwesomeIcon icon={faCircleCheck} /> {service.title}
                  </h1>
                  <h1 className="text-white/50 text-base italic">
                    <FontAwesomeIcon
                      className="text-red-700"
                      icon={faAngleDoubleRight}
                    />{" "}
                    {service.description}
                  </h1>
                </div>
              </ScrollOpacity>
            ))}
          </div>

          <div className="mt-8">
            <ScrollRevealAnimation delay={0.5}>
              <h1 className="text-red-700 text-xl md:text-2xl">Radno vreme</h1>
            </ScrollRevealAnimation>
            <ul className="text-gray-500">
              {workHours.map((item, index) => (
                <ScrollOpacity
                  direction={"left"}
                  delay={index * 0.4}
                  key={index}
                >
                  <li className="mb-2 md:mb-0">
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className="text-red-700 mr-2"
                    />
                    {item.day}: {item.hours}
                  </li>
                </ScrollOpacity>
              ))}
              <ScrollOpacity direction={"left"} delay={0.7}>
                <li>
                  <FontAwesomeIcon
                    icon={faMapLocation}
                    className="text-red-700 text-lg md:text-xl mr-2"
                  />
                  <span>Kneza Mihajla 39-29, Smederevo 11300</span>
                </li>
              </ScrollOpacity>
            </ul>
          </div>
        </div>
        <ScrollOpacity direction={"left"}>
          <div className="h-80 md:h-[40rem] w-full relative border-b-5 border-red-700 md:order-1">
            <Image
              fill
              src={image}
              alt="Slika"
              quality={100}
              className="saturate-0 object-cover clipped"
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
        </ScrollOpacity>
      </div>
    </div>
  );
};

export default About;
