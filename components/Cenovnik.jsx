import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Cenovnik = () => {
  const cenovnik = [
    {
      title: "Muški",
      options: [
        { text: "Teretana Mesec - 2.500 RSD" },
        { text: "Teretana + Kardio Mesec - 3.200 RSD" },
        { text: "Pola Meseca - 1.250 / 1.600 RSD" },
      ],
    },
    {
      title: "Ženski",
      options: [
        { text: "Teretana + Kardio Mesec - 2.400 RSD" },
        { text: "Pola Meseca - 1.200 RSD" },
      ],
    },
  ];

  return (
    <div id="cenovnik" className="bg-black flex flex-col p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col">
          <h1 className="text-red-700 text-2xl italic">CENOVNIK</h1>
          <h1 className="text-white text-4xl font-bold">
            NAJPOVOLJNIJE CENE ZA NAŠE VEŽBAČE
          </h1>
          <br />
          <p className="text-xl text-gray-500 italic">
            Nudimo visokokvalitetne fitnes usluge po povoljnim cenama,
            prilagođene svima. Vaš put ka boljem zdravlju nikada nije bio
            pristupačniji!
          </p>
          <hr className="border-[2px] border-red-700 w-16 mt-4" />
          <div className="bg-red-700 clipped mx-0 md:mx-12 p-6 md:p-12 mb-12 md:mb-0 mt-12">
            <h1 className="text-2xl md:text-4xl text-white italic">
              PORODIČNI POPUST <br />{" "}
              <span className="font-bold border-b-4 border-black/60">
                300 RSD
              </span>
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {cenovnik.map(({ title, options }) => (
            <div
              key={title}
              className="bg-gray-900/60 h-96 border-b-[5px] clipped border-red-700 p-12 flex flex-col"
            >
              <h1 className="text-5xl md:text-3xl font-bold text-white italic text-center">
                {title}
              </h1>
              <hr className="border-[2px] border-red-700 w-16 mx-auto mb-6" />
              <div className="flex flex-col gap-4">
                {options.map(({ text }) => (
                  <h1
                    key={text}
                    className="text-xl md:text-base flex items-center text-gray-400"
                  >
                    <FontAwesomeIcon
                      className="text-red-700 mr-2"
                      icon={faAngleDoubleRight}
                    />{" "}
                    {text}
                  </h1>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cenovnik;
