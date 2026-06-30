import { useState, useEffect } from "react";
import { Menu, X, Apple } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <div className="flex items-center gap-2 font-semibold text-xl">
          <Apple size={22} />
          AppleUI
        </div>

        <div className="hidden md:flex gap-10 text-gray-300">
          <a href="#">Home</a>
          <a href="#features">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button
          className="hidden md:block bg-white text-black px-5 py-2 rounded-full hover:scale-105 transition"
        >
          Download
        </button>

        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">

          <div className="flex flex-col p-6 gap-5">

            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Contact</a>

          </div>

        </div>
      )}

    </motion.nav>
  );
}
