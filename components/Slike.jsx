"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const Slike = () => {
  const images = require.context("../assets/images/sliketeretane", true);
  const [imageList, setImageList] = useState([]);
  const [enlargedIndex, setEnlargedIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImageList = async () => {
      const imagesArray = await Promise.all(
        images.keys().map(async (image) => {
          const imgSrc = images(image).default;
          return imgSrc;
        })
      );
      setImageList(imagesArray);
      setIsLoading(false);
    };

    loadImageList();
  }, [images]);

  const enlargeImage = (index) => {
    setEnlargedIndex(index);
    document.body.style.overflow = "hidden"; // Prevent scrolling when an image is enlarged
  };

  const closeEnlarged = () => {
    setEnlargedIndex(null);
    document.body.style.overflow = ""; // Restore scrolling when the image is closed
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

  const handleKeyDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (enlargedIndex !== null) {
      if (e.key === "ArrowLeft") {
        navigate("prev");
      } else if (e.key === "ArrowRight") {
        navigate("next");
      }
    }
  };

  return (
    <div className="p-12 flex flex-col" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {isLoading ? (
          <>
            {[...Array(12)].map((_, index) => (
              <div key={index} className="h-64 skeleton-loader"></div>
            ))}
          </>
        ) : (
          imageList.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden bg-black">
              <div
                onClick={() => enlargeImage(index)}
                className="cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`slika-${index}`}
                  className="saturate-0 object-cover absolute opacity-60 hover:opacity-100 transition-all duration-300 hover:saturate-100"
                  fill
                  quality={10}
                  onLoad={() => setIsLoading(false)}
                />
              </div>
            </div>
          ))
        )}
      </div>

      {enlargedIndex !== null && (
        <div
          style={{ zIndex: 140 }}
          className="fixed top-12 w-full h-full left-0 p-2 md:p-24 bg-black/80 flex md:flex-row flex-col justify-center gap-6 items-center"
        >
          <button
            className="text-red-700 text-3xl border-red-700 border p-2 sm:p-4 w-10 sm:w-14 h-10 sm:h-14 hidden md:flex items-center justify-center hover:text-black hover:bg-red-700"
            onClick={() => navigate("prev")}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </button>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} // Početno stanje animacije
              animate={{ opacity: 1, scale: 1 }} // Stanje animacije nakon inicijalnog renderovanja
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="relative w-full md:w-96 h-[30rem]"
            >
              <Image
                src={imageList[enlargedIndex]}
                alt={`slika-${enlargedIndex}`}
                fill
                className="object-cover"
                onClick={closeEnlarged}
                onLoad={() => setIsLoading(false)}
              />
            </motion.div>
          </AnimatePresence>
          <button
            className="text-red-700 text-3xl border-red-700 hidden md:flex border p-2 sm:p-4 w-10 sm:w-14 h-10 sm:h-14 items-center justify-center hover:text-black hover:bg-red-700"
            onClick={() => navigate("next")}
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
          <div className="flex md:hidden gap-12 mt-6">
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
