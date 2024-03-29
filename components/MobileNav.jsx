"use client"
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image'
import icon from '../assets/icons/navbar.svg'
import logo from '../assets/images/logo.png'
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // Stanje za praćenje otvorenog/zatvorenog menija

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
    <div style={{zIndex: 150}} className="bg-black md:hidden px-4 py-2 flex items-center justify-between fixed top-0 w-full">
      <Image src={logo} width={75} alt="logo"/>
      <button className="bg-red-700 p-2 h-12 w-12 clip" onClick={toggleMenu}>
        {isOpen ? <FontAwesomeIcon className='text-white' icon={faClose} size="2x" /> : <Image src={icon} width={35} className="invert"/>}
      </button>
      {isOpen && (
        <ul className="absolute top-12 flex flex-col h-screen gap-12 left-0 w-full bg-black text-xl text-white mt-2 p-12">
          {navbarItems.map((item, key) => (
            <li key={key} className="relative py-2 px-4 hover:text-red-600 transition-all duration-300 flex gap-2 items-center">
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              <Link
                className=""
                onClick={() => setIsOpen(false)}
                href={item.link}
              >
                {item.naziv}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileNav;
