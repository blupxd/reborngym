"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

const Slike = () => {
  const images = require.context("../assets/images/sliketeretane", true);
  const [imageList, setImageList] = useState([]);
  const [enlargedIndex, setEnlargedIndex] = useState(null);

  useEffect(() => {
    const imagesArray = images.keys().map((image) => images(image).default);
    setImageList(imagesArray);
  }, [images]);

  const enlargeImage = (index) => {
    setEnlargedIndex(index);
  };

  const closeEnlarged = () => {
    setEnlargedIndex(null);
  };

  const navigate = (direction) => {
    if (enlargedIndex !== null) {
      if (direction === "prev") {
        setEnlargedIndex((prevIndex) =>
          prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
        );
      } else {
        setEnlargedIndex((prevIndex) =>
          prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
        );
      }
    }
  };

  return (
    <div className="p-12 flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {imageList.map((image, index) => (
          <div key={index} className="relative h-64 overflow-hidden bg-black">
            <Image
              src={image}
              alt={`slika-${index}`}
              className="saturate-0 absolute opacity-60 hover:opacity-100 transition-all duration-300 hover:saturate-100 cursor-pointer"
              objectFit="cover"
              fill={true}
              quality={10}
              onClick={() => enlargeImage(index)}
            />
          </div>
        ))}
      </div>
      {enlargedIndex !== null && (
        <div className="fixed top-12 w-full h-full left-0 z-50 p-2 md:p-24 bg-black/50 flex md:flex-row flex-col justify-center items-center">
            <button
              className="text-red-700 text-3xl border-red-700 border p-2 sm:p-4 w-10 sm:w-14 h-10 sm:h-14 hidden md:flex items-center justify-center hover:text-black hover:bg-red-700"
              onClick={() => navigate("prev")}
            >
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </button>
            
          <div className="relative w-full md:w-96 h-[35rem]">
            <Image
              src={imageList[enlargedIndex]}
              alt={`slika-${enlargedIndex}`}
              objectFit="contain"
              layout="fill"
              onClick={closeEnlarged}
            />
          </div>
          <button
              className="text-red-700 text-3xl border-red-700 hidden md:flex border p-2 sm:p-4 w-10 sm:w-14 h-10 sm:h-14 flex items-center justify-center hover:text-black hover:bg-red-700"
              onClick={() => navigate("next")}
            >
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </button>
          <div className="flex gap-12 mt-6">
            <button
              className="text-red-700 text-3xl border-red-700 border p-2 sm:p-4 w-32 h-10 sm:h-14 flex items-center justify-center hover:text-black hover:bg-red-700"
              onClick={() => navigate("prev")}
            >
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </button>
            <button
              className="text-red-700 text-3xl border-red-700 border p-2 sm:p-4 w-32 h-10 sm:h-14 flex items-center justify-center hover:text-black hover:bg-red-700"
              onClick={() => navigate("next")}
            >
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </button>
          </div>

          <button
            className="text-white absolute top-12 md:top-12 right-6 md:right-12 text-3xl sm:text-4xl"
            onClick={closeEnlarged}
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Slike;
