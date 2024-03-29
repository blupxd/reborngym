import Image from "next/image";
import image from "../../assets/images/image.jpg";
import Slike from "@/components/Slike";

const Galerija = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-96 flex flex-col justify-center items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="slika"
            className="opacity-20"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="relative z-10">
          <h1 className="text-white border-b-[2px] border-red-700 text-4xl lg:text-6xl font-bold uppercase">
            GALERIJA
          </h1>
        </div>
      </div>
      <Slike />
    </div>
  );
};

export default Galerija;
