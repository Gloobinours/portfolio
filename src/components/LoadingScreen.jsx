import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const fullText = "Loading...";
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleCount(index + 1);
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete, fullText.length]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-50 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold flex">
        {fullText.split("").map((char, i) => (
          <span
            key={i}
            className={
              i < visibleCount
                ? "inline-block animate-fade-in-up"
                : "invisible"
            }
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};