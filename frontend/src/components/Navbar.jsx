/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

// === Hover Variants ===
const linkVariants = {
  initial: { y: 0 },
  hover: { y: "-100%" }, // move text up
};

const overlayVariants = {
  initial: { y: "100%" }, // hidden below
  hover: { y: 0 }, // slide in
};

const transition = {
  duration: 0.4,
  ease: [0.51, 0.92, 0.24, 1.15], // smooth cubic-bezier
};

// === Reusable Link Component ===
function AnimatedLink({ href, text, onClick, className }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      className={`relative overflow-hidden inline-block ${className}`}
      initial="initial"
      whileHover="hover"
    >
      {/* Top Layer */}
      <motion.span
        className="block"
        variants={linkVariants}
        transition={transition}
      >
        {text}
      </motion.span>

      {/* Bottom Layer */}
      <motion.span
        className="block absolute top-0 left-0"
        variants={overlayVariants}
        transition={transition}
      >
        {text}
      </motion.span>
    </motion.a>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ===== Top Navbar ===== */}
      {!isScrolled ? (
        <motion.nav className="fixed top-8 right-14 flex gap-10 font-sans text-2xl z-50">
          {["#services", "#works", "#about", "#contact"].map((link, i) => (
            <AnimatedLink
              key={i}
              href={link}
              text={
                link.replace("#", "").charAt(0).toUpperCase() +
                link.replace("#", "").slice(1)
              }
              className="font-semibold text-gray-500"
            />
          ))}
        </motion.nav>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[var(--color-secondary-400)] text-white flex items-center justify-center shadow-lg"
        >
          <Menu size={28} />
        </button>
      )}

      {/* ===== Sidebar ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background Blur */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-full bg-black/40 backdrop-blur-xl z-50 p-12 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white"
              >
                <X size={28} />
              </button>

              {/* Sidebar Nav links */}
              <nav className="flex flex-col gap-10 mt-20 pl-12">
                {[
                  { href: "#home", text: "Home" },
                  { href: "#services", text: "Services" },
                  { href: "#works", text: "Works" },
                  { href: "#about", text: "About" },
                  { href: "#contact", text: "Contact" },
                ].map((link, i) => (
                  <AnimatedLink
                    key={i}
                    href={link.href}
                    text={link.text}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-bold text-white tracking-wide"
                  />
                ))}
              </nav>

              {/* Email */}
              <div className="mt-12 pl-12">
                <p className="text-sm font-bold uppercase text-gray-400 mb-2">
                  Email Address
                </p>
                <a
                  href="mailto:sambaranb25@gmail.com"
                  className="text-lg font-semibold text-gray-100 hover:text-[var(--color-secondary-400)]"
                >
                  sambaranb25@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-auto pl-12 flex gap-6">
                <a
                  href="https://www.linkedin.com/in/sambaran-banerjee-4b89b9299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-gray-800/70 backdrop-blur-sm hover:bg-[var(--color-secondary-400)] text-gray-100 font-bold transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/SambaranBanerjee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-gray-800/70 backdrop-blur-sm hover:bg-[var(--color-secondary-400)] text-gray-100 font-bold transition"
                >
                  GitHub
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
