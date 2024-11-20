import Navbar from "../ui/Navbar.tsx";
import { useState, useEffect } from "react";

export default function NavbarLayout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("Component mounted");
    const handleScroll = () => {
      console.log("Scrolling...");
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`flex items-center fixed top-0 w-full h-[3.688rem] ${scrolled ? "bg-defaultBlack" : "bg-transparent"}`}>
      <p className="text-white font-bold pl-[7.563rem]">
        M<span className="text-lightBlue">rC</span>
      </p>
      <Navbar />
    </section>
  );
}
