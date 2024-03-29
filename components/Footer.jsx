import {
  faAngleRight,
  faClock,
  faEnvelope,
  faMapLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const navbarItems = [
    {
      naziv: "Home",
      link: "/",
    },
    {
      naziv: "Galerija",
      link: "/galerija",
    },
    {
      naziv: "Cenovnik",
      link: "/#cenovnik",
    },
    {
      naziv: "Treneri",
      link: "/treneri",
    },
    {
      naziv: "O nama",
      link: "/#o-nama",
    },
  ];
  
  return (
    <div className="border-t border-red-800/50 bg-black py-8 md:py-12 px-6 md:px-24 md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4">
        
        <div className="flex flex-col">
          <h1 className="text-red-700 font-bold text-xl md:text-left text-center">Sadržaj sajta</h1>
          <ul className="flex flex-col  gap-2 mt-4 font-thin text-white">
            {navbarItems.map((item, key) => (
              <li key={key} className="flex gap-2 items-center">
                <FontAwesomeIcon className="text-red-800" icon={faAngleRight} />
                <Link
                  className="text-white italic hover:text-red-800 transition-all duration-300"
                  href={item.link}
                >
                  {item.naziv}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="text-red-700 font-bold text-xl md:text-left text-center">Informacije</h1>
          <ul className="text-white flex flex-col gap-4 mt-4 text-sm">
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faMapLocation}
                className="text-red-700 text-xl mr-2"
              />
              <span>Kneza Mihajla 39-29, Smederevo 11300</span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-red-700 text-xl mr-2"
              />
              <span>
                <Link href="mailto:matrixgym.n.s@gmail.com">
                  matrixgym.n.s@gmail.com
                </Link>
              </span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-red-700 text-xl mr-2"
              />
              <span>
                <Link href="tel:+381 63 281 912">+381 63 281 912</Link>
              </span>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon
                icon={faClock}
                className="text-red-700 text-xl mr-2"
              />
              <span>
                08:00 - 22:00, Ponedeljak - Petak <br />
                09:00 - 20:00, Subota <br />
                12:00 - 20:00, Nedelja
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-center md:text-left">
          <h1 className="font-extrabold mb-4 text-red-600 text-3xl">
            REBORN GYM
          </h1>
          <p className="text-sm text-white italic mb-4">
            <FontAwesomeIcon icon={faAngleRight} /> Uđite kao što jeste, izađite
            kao pobednik.
          </p>
          <div className="inline-flex text-lg items-center justify-center md:justify-start gap-8">
            <Link
              href="https://www.instagram.com/reborngym_/"
              className="text-red-600 hover:text-red-800 text-sm transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </Link>
            <Link
              href="https://www.facebook.com/RebornGYM207"
              className="text-red-600 hover:text-red-800 text-sm transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
