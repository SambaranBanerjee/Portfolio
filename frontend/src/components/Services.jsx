// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Full-Stack Development",
    description:
      "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users.",
    points: ["React, Node.js, Express.js", "REST APIs, Firebase, Docker", "Git, GitHub, Postman"],
  },
  {
    id: "02",
    title: "UI/UX & Frontend",
    description:
      "Design is more than looks — it’s about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences.",
    points: ["NextJs, TailwindCSS, GSAP", "Figma to Code", "HTML, CSS, JavaScript"],
  },
  {
    id: "03",
    title: "Cloud & DevOps",
    description:
      "Beyond handling data, I’m driven by the challenge of turning complex raw inputs into reliable, usable systems. I enjoy designing pipelines that power insights and apply core CS principles to build for scale, speed, and stability.",
    points: ["AWS, GCP, Azure", "Docker & Kubernetes", "CI/CD Automation"],
  },
];

export default function Services() {
  return (
    <section className="bg-black text-gray-200 relative font-sans">
      {/* ================= Header Section ================= */}
      <div className="px-12 py-24 border-b border-gray-700">
        <h1 className="text-[6rem] font-extrabold leading-none tracking-tight text-gray-300">
          WHAT I DO<span className="text-gray-400"> /</span>
        </h1>

        <div className="mt-12 flex flex-col md:flex-row items-start gap-12">
          <span className="uppercase tracking-widest text-sm text-gray-400">
            (Services)
          </span>
          <p className="text-lg max-w-3xl text-gray-300">
            I specialize in building full-stack web applications that are fast,
            reliable, and user-friendly. With a solid foundation in both frontend
            and backend technologies, I help bring ideas to life whether it's
            for a business, a startup, or a product team.
          </p>
        </div>
      </div>

      {/* ================= Services List ================= */}
      {services.map((service) => (
        <div key={service.id} className="relative">
          {/* Sticky Heading */}
          <h2
            className="
              sticky top-0 z-20 
              bg-black 
              border-b border-gray-700
              px-12 py-6
              text-6xl font-bold
              flex items-center
            "
          >
            <span className="text-gray-400 mr-4">({service.id})</span>
            {service.title}
          </h2>

          {/* Content */}
          <motion.div
            className="ml-12 px-6 py-12 max-w-3xl border-l-4 border-gray-700"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="text-lg text-gray-300 mb-6">
              {service.description}
            </p>

            <ul className="space-y-4">
              {service.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-baseline border-b border-gray-700 pb-5"
                >
                  <span className="text-xl font-bold text-gray-400 mr-3">
                    {i + 1 < 10 ? `0${i + 1}` : i + 1}
                  </span>
                  <span className="text-3xl font-bold tracking-wide">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
