import { RevealOnScroll } from "../RevealOnScroll";


export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
    <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Louan
        </h1>
        <p className="text-gray-400 text-lg mx-auto max-w-xl mb-8">
          I’m a passionate Software Engineering student at the Rochester Institute of Technology. 
          My experience spans a wide range of projects, from machine learning applications to back-end development. 
          I’m currently seeking exciting co-op and internship opportunities within the United States to contribute 
          my skills and grow professionally. 
        </p>
        <div className="flex justify-center space-x-4">
          <button 
              onClick=""
              className="px-6 py-3 bg-blue-500 rounded font-medium
                          transition relative overflow-hidden hover:-translate-y-0.5 
                          hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Download Resume
          </button>
          <a 
              href="#contact"
              className="border border-blue-500/50 px-6 py-3 rounded font-medium
                          transition-all duration-200 hover:-translate-y-0.5 
                          hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]
                          hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </RevealOnScroll>
    </section>
  );
}