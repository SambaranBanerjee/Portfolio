/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react"; // Icon for scroll to top
import CV from "../../public/Sambaran_Banerjee_s_Resume_OnePage(NOV).pdf";

export default function Contact() {
  const email = "Sambaranb25@gmail.com";
  const subject = "Hello 👋";
  const body = "Hi, I would like to connect with you.";
  const cvFile = CV;

  const [showButton, setShowButton] = useState(false);

  // Gmail compose link
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Show button only when scrolled a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-16 relative"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold mb-12"
      >
        Get in Touch
      </motion.h1>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-lg bg-neutral-900 rounded-2xl shadow-lg p-8 space-y-6"
      >
        {/* Input Fields */}
        <input
          type="text"
          placeholder="Drop a Name"
          className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          placeholder="Wanna Get in Touch? Add Your Email"
          className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          rows="5"
          placeholder="Say Hello or Drop a Note."
          className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Say Hello */}
          <a
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition-all font-semibold"
          >
            Say Hello
          </a>

          {/* Download CV */}
          <a
            href={cvFile}
            download
            className="w-full sm:w-auto text-center px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all font-semibold"
          >
            Download CV
          </a>
        </div>
      </motion.div>

      {/* Scroll-to-top button (ONLY in Contact page) */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center shadow-lg transition-all"
        >
          <ArrowUp className="text-white w-6 h-6" />
        </button>
      )}
    </div>
  );
}
