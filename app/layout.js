import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import Nav from "../components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const sg = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Reborn Gym | Better, Stronger, Faster",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sg.className}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
