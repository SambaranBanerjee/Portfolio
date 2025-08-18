/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TimezoneClock from "../assets/videos/TimezoneClock.mp4";
import Trayana_App from "../assets/videos/Trayana_App.mp4";
import Portfolio from "../assets/videos/Portfolio.mp4";

const projects = [
  
  {
    id: 1,
    name: "Trayana (Emergency Response App)",
    tech: "React Native, Node.js, Twilio API",
    video: Trayana_App,
  },
  {
    id: 2,
    name: "Portfolio Website",
    tech: "React, Tailwind, Framer Motion",
    video: Portfolio,
  },
  {
    id: 3,
    name: "Timezone Clock",
    tech: "HTML5, CSS3, JavaScript",
    video: TimezoneClock,
  },
];

export default function Works() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  // Intersection Observer to detect which section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index + 1); // +1 because 0 = header
          }
        });
      },
      { threshold: 0.6 } // change when 60% of section is visible
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div id="works" className="w-full bg-[#000000] text-white">
      {/* Header */}
      <section className="min-h-screen flex flex-col justify-center px-12">
        <h1 className="text-[5rem] font-extrabold tracking-tight leading-none">
          SELECTED WORKS /
        </h1>
        <p className="mt-8 max-w-3xl text-gray-400 text-xl leading-relaxed">
          (PROJECTS) Thoughtfully crafted digital experiences that blend utility
          and aesthetics into something functional, memorable, and refined.
        </p>
      </section>

      {/* Main layout */}
      <div className="flex -mt-32">
        {/* Sticky Number Column */}
        <div className="w-[40%] flex justify-center">
          <div className="sticky top-0 h-screen flex items-center">
            <AnimatePresence mode="wait">
              {activeIndex > 0 && (
                <motion.h1
                  key={activeIndex}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 0.6 }}
                  className="text-[25rem] text-[#a29e9a]"
                >
                  {activeIndex}
                </motion.h1>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Scrollable Projects */}
        <div className="w-[60%]">
          {projects.map((project, i) => (
            <section
              key={project.id}
              ref={(el) => (sectionRefs.current[i] = el)}
              data-index={i}
              className="min-h-screen flex flex-col items-center justify-center px-8"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl w-[80%] h-[400px] bg-black flex items-center justify-center">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="mt-6 text-center">
                <h2 className="text-3xl font-bold">{project.name}</h2>
                <p className="text-gray-400 text-lg">{project.tech}</p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
