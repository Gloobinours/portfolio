import { RevealOnScroll } from "../RevealOnScroll";

export const Experience = () => {
  const technologies = ["Java 21", "Java 8", "Flutter"];

  return (
    <section id="experience" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-center text-transparent">
            Experience
          </h2>

          <div className="rounded-xl p-8 border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.08)] hover:-translate-y-1 transition-all">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Software Engineering Intern</h3>
                <p className="text-blue-400 font-medium">Discovery Machine Inc.</p>
              </div>
              <span className="text-sm text-yellow-400">Aug 2025 - Aug 2026</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-gray-300">
              <p>
                Worked across both backend and frontend development, building software solutions with Java 21 and Java 8 for server-side logic and Flutter for user-facing interfaces.
              </p>
              <p>
                I developed an internal tool to benchmark different large language models and determine which best fit our needs. This tool dramatically improved our workflow, reducing response times from 45+ seconds to 4 seconds.
              </p>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
