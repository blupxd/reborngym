"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import icon from "../assets/icons/navbar.svg";
import logo from "../assets/images/logo.png";
import { usePathname } from 'next/navigation'
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
const MobileNav = () => {
  const path = usePathname()
  const [isOpen, setIsOpen] = useState(false); // Stanje za praćenje otvorenog/zatvorenog menija
  const [selectedLink, setSelectedLink] = useState(path);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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
    <div
      style={{ zIndex: 150 }}
      className="bg-black md:hidden px-4 py-2 flex items-center justify-between fixed top-0 w-full"
    >
      <Image src={logo} width={75} alt="logo" />
      <button className="bg-red-700 p-2 h-12 w-12 clip" onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon className="text-white" icon={faClose} size="2x" />
        ) : (
          <Image src={icon} width={35} className="invert" alt="menu"/>
        )}
      </button>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsOpen(false)
          }}}
        className={`w-screen left-0 h-screen absolute top-14 ${
          isOpen ? "bg-black/50 backdrop-blur-sm" : ""
        } transition-all duration-300`}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <ul
          className={`transform absolute right-0  ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-all duration-300 flex flex-col h-screen gap-12 w-80 bg-black text-xl text-white p-12`}
        >
          {navbarItems.map((item, key) => (
            <li
              key={key}
              className={`${
                selectedLink === item.link && "text-red-600"
              } relative hover:text-red-600 transition-all duration-300 flex gap-2 items-center justify-end`}
            >
              <Link
                onClick={() => {
                  setIsOpen(false);
                  setSelectedLink(item.link);
                }}
                href={item.link}
              >
                {item.naziv}
              </Link>
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </li>
          ))}
          <li className="flex flex-col items-end font-thin text-lg gap-4">
            <Link
              href="https://www.instagram.com/reborngym_/"
              className="text-red-600 hover:text-red-800 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faInstagram} />{" "}
              <span className="text-white">Instagram</span>
            </Link>
            <Link
              href="https://www.facebook.com/RebornGYM207"
              className="text-red-600 hover:text-red-800 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faFacebook} />{" "}
              <span className="text-white">Facebook</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
