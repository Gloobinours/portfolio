import { RevealOnScroll } from "../RevealOnScroll";
import { CourseworkCarousel } from "../CourseworkCarousel";
import skills from "../../data/skills.json";

export const About = () => {
  // Prepare sections dynamically from the JSON keys
  const skillSections = Object.entries(skills);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a passionate developer with a love for creating innovative solutions. My journey in tech has been driven by curiosity and a desire to learn continuously.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {skillSections.map(([key, skillArr]) => (
                <div key={key} className="rounded-xl p-6 hover:translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">
                    {key}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillArr.map((skill, index) => (
                      <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <p className="text-gray-300 mb-4">
                I hold a Bachelor's degree in Software Engineering from the Rochester Institute of Technology, where I developed a strong foundation in software engineering and machine learning.
              </p>
              <h4 className="text-l font-bold mb-4">Relevant Coursework:</h4>
              <CourseworkCarousel />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}