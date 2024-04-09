import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import opengraph from './opengraph-image.png'
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });
const sg = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Reborn Gym | Početna",
  description: "Reborn Gym je vaša destinacija za fitness i trening u srcu grada. Ponosimo se pružanjem vrhunskih usluga i programa treninga za sve nivoe fitnessa.",
  keywords: "fitness, trening, teretana, zdravlje, vežbanje, reborngym, trener",
  author: "Reborn Gym",
  openGraph: {
    title: "Reborn Gym | Better, Faster, Stronger",
    description: "Reborn Gym je vaša destinacija za fitness i trening u srcu grada. Ponosimo se pružanjem vrhunskih usluga i programa treninga za sve nivoe fitnessa.",
    image: opengraph,
    siteName: "Reborn Gym | Better, Faster, Stronger"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="rs">
      <body className={`${inter.className} ${sg.className}`}>
        
        <Nav />
        <MobileNav />
        <div className="pt-16 bg-black max-h-full">
        <ScrollToTop />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
