"use client"
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  const [selectedLink, setSelectedLink] = useState("/");

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
    <div style={{zIndex: 150}} className="bg-black px-12 py-4 hidden md:inline-flex w-full items-center justify-between fixed top-0">
      <h1 className="font-bold text-red-700 text-3xl">REBORN GYM</h1> 
      <ul className="inline-flex teko gap-6 lg:gap-16 font-semibold text-white">
        {navbarItems.map((item, key) => (
          <li key={key} className="relative">
            <Link
              className={`custom-underline ${
                selectedLink === item.link && "text-red-600 underline-selected"
              }`}
              onClick={() => setSelectedLink(item.link)}
              href={item.link}
            >
              {item.naziv}
            </Link>
          </li>
        ))}
      </ul>
      <div className="inline-flex items-center justify-center text-lg gap-8">
        <Link href="https://www.instagram.com/reborngym_/" className="text-red-600 hover:text-red-800 transition-all duration-300">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="https://www.facebook.com/RebornGYM207" className="text-red-600 hover:text-red-800 transition-all duration-300">
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
