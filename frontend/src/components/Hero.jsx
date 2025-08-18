import Aesthetic from '../assets/Aesthetic.jpg';
export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#e8e8e3] flex flex-col justify-between px-10 py-8">
      
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <p className="text-xl font-grotesk text-[var(--color-secondary-400)]">
          Software Engineer | Full Stack Developer | DevOps Enthusiast
        </p>
      </div>

      {/* Middle Section */}
      <div className="flex flex-1 items-center justify-between">
        {/* Left Content */}
        <div className="max-w-lg">
          <h1
            className="
              text-[length:var(--text-h1)] 
              sm:text-[length:var(--text-heading-display)] 
              font-semibold 
              uppercase 
              leading-[80%] 
              tracking-[var(--tracking-heading)] 
              text-[var(--color-secondary-400)] 
              overflow-clip
            "
          >
            SAMBARAN BANERJEE
          </h1>

          <p className="mt-6 text-[var(--color-secondary-400)] text-lg leading-relaxed">
            Open to job opportunities worldwide. Passionate about building polished,
            intuitive, and thoughtful digital experiences that leave a mark.
          </p>

          <button className="mt-6 px-6 py-3 bg-[#393632] text-white font-semibold rounded-full hover:bg-gray-800 transition">
            CONTACT ↗
          </button>
        </div>

        {/* Right Image */}
        <div className="w-[320px] h-[400px] rounded-lg overflow-hidden shadow-lg">
          <img
            src={Aesthetic}
            alt="Profile / Showcase"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-6 right-10 text-right">
        <p className="text-xs text-[var(--color-secondary-400)] uppercase">
          Available for work
        </p>
        <h2 className="text-7xl font-bold text-[var(--color-secondary-400)]">
          AUG'25
        </h2>
      </div>
    </section>
  );
}
