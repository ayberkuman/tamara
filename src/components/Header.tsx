import Image from "next/image";
import logo from "../assets/png/lexir-logo.png";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="h-24 bg-white flex justify-between items-center px-8 shadow-md">
      <button>
        <Image src={logo} width={103} height={24} alt="logo" />
      </button>
      <Navigation username="leandro" />
    </header>
  );
};
