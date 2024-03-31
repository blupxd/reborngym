import Image from "next/image";
import image from "../../assets/images/image.jpg";
import Slike from "@/components/Slike";
import ScrollOpacity from "@/components/ScrollOpacity";
import ScrollRevealAnimation from "@/components/ScrollReveal";

const Galerija = () => {
  return (
    <div className="flex flex-col">
      <div className="relative h-72 flex flex-col justify-center items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt="slika"
            className="opacity-20 object-cover"
            fill
          />
        </div>
        <div className="relative flex flex-col md:items-start items-center z-10">
          <ScrollOpacity direction={"left"} delay={0.3}>
            <hr className="border-[5px] w-40 border-red-700 clipped" />
          </ScrollOpacity>
          <ScrollRevealAnimation delay={0.4}>
            <h1 className="text-white italic text-6xl lg:text-7xl font-bold uppercase">
              GALERIJA
            </h1>
          </ScrollRevealAnimation>
        </div>
      </div>
      <Slike />
    </div>
  );
};

export default Galerija;
