/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Aesthetic2 from "../assets/Aesthetic2.jpeg"; 

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
  ease: [0.51, 0.92, 0.24, 1.15],
};

function HoverListItem({ text }) {
  return (
    <motion.li
      className="relative overflow-hidden cursor-pointer text-lg text-[#a29e9a] font-medium"
      initial="initial"
      whileHover="hover"
    >
      {/* Normal text */}
      <motion.span
        className="block"
        variants={linkVariants}
        transition={transition}
      >
        {text}
      </motion.span>

      {/* Hover text */}
      <motion.span
        className="block absolute top-0 left-0"
        variants={overlayVariants}
        transition={transition}
      >
        {text}
      </motion.span>
    </motion.li>
  );
}

export default function About() {
  return (
    <div id="about" className="w-full bg-black text-white">
      {/* First Section */}
      <section className="min-h-screen px-12 py-16 flex flex-col justify-center">
        {/* Huge Text */}
        <h1 className="text-[5rem] font-bold leading-none tracking-tight text-gray-700">
          DEVELOPER,
          <br />
          DESIGNER,
          <br />
          CREATOR /
        </h1>

        {/* Three Lists */}
        <div className="flex flex-col gap-12 mt-16">
          {/* Languages & Tools */}
          <h1 className="text-5xl font-bold">Skills</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ul className="space-y-4 text-lg">
                <h2 className="font-bold text-2xl mb-4">Languages & Tools</h2>
                <HoverListItem text="JavaScript (ES6+)" />
                <HoverListItem text="TypeScript" />
                <HoverListItem text="Python" />
                <HoverListItem text="C++" />
                <HoverListItem text="Git & GitHub" />
                <HoverListItem text="VS Code" />
            </ul>

            {/* Frameworks & Libraries */}
            <ul className="space-y-4 text-lg">
                <h2 className="font-bold text-2xl mb-4">Frameworks & Libraries</h2>
                <HoverListItem text="React" />
                <HoverListItem text="Next.js" />
                <HoverListItem text="Node.js" />
                <HoverListItem text="Express" />
                <HoverListItem text="Tailwind CSS" />
                <HoverListItem text="Framer Motion" />
            </ul>

            {/* Core CS Concepts */}
            <ul className="space-y-4 text-lg">
                <h2 className="font-bold text-2xl mb-4">Core CS Concepts</h2>
                <HoverListItem text="Data Structures & Algorithms" />
                <HoverListItem text="Database Systems" />
                <HoverListItem text="Operating Systems" />
                <HoverListItem text="Computer Networks" />
                <HoverListItem text="OOP" />
                <HoverListItem text="Software Engineering" /> 
            </ul>
          </div>
        </div>
      </section>

      {/* Second Section - Profile */}
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-12 py-16 gap-16">
        {/* Profile Image */}
        <motion.img
          src={Aesthetic2}
          alt="Profile"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-84 h-104 object-cover rounded-2xl shadow-2xl"
        />

        {/* Name + Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-xl text-center lg:text-left"
        >
          <h2 className="text-5xl font-extrabold">Sambaran Banerjee</h2>
          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
           I am a passionate Software Engineer with a knack for building full-stack web applications using modern technologies like Next.js and Tailwind CSS. My journey in tech began with a curiosity for solving real-world problems through innovative solutions, which evolved into a love for crafting user-centric digital experiences.
            Beyond coding, I thrive in collaborative environments and enjoy tackling challenging problems with creative solutions. I aim to contribute to impactful projects that make a difference in users' lives.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
