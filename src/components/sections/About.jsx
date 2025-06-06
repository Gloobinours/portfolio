import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

  const backendSkills = ["Python", "Java", "MongoDB", "PostgreSQL", "GraphQL", "REST APIs"];
  const machineLearningSkills = ["Python", "PyTorch", "Scikit-learn", "Natural Language Processing", "Computer Vision"];

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 text-xl font-bold mb-4>Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
              <h3 text-xl font-bold mb-4>Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {machineLearningSkills.map((skill, index) => (
                  <span key={index} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul list-disc list-inside text-gray-300 space-y-2>
              <li>
                <strong>Bachelor of Science in Software Engineering</strong> - Rochester Institute of Technology (2021-2025)
              </li>
              <li>
                <strong>Relevant Coursework:</strong> Cloud Computing, analysis of Algorithms, Engineering of Software Subsystems
              </li>
            </ul>
          </div>
        </div>
      </div>
    </RevealOnScroll>
    </section>
  );
}