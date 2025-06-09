import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Minigame3D } from "../Minigame3D";

export const Footer = () => {
  const [showGame, setShowGame] = useState(false);

  return (
    <footer id="footer" className="w-full py-8 flex flex-col items-center bg-transparent mt-16 z-50 relative">
      <Minigame3D open={showGame} onClose={() => setShowGame(false)} />
      <div className="flex space-x-6 mb-2">
        <a
          href="https://github.com/Gloobinours"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-blue-400 text-2xl transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/louan-flammanc-07a349237/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-blue-400 text-2xl transition"
        >
          <FaLinkedin />
        </a>
        {/* Easter egg: click the dot to open minigame */}
        <button
          aria-label="Open minigame"
          className="w-3 h-3 rounded-full bg-blue-500 opacity-40 hover:opacity-80 transition ml-2"
          style={{ outline: "none", border: "none" }}
          onClick={() => setShowGame(true)}
          tabIndex={0}
        />
      </div>
      <div className="text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Louan Flammanc
      </div>
    </footer>
  );
};