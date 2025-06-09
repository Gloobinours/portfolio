import { useState } from "react";
import classesTaken from "../data/classesTaken.json";

const CARDS_TO_SHOW = 3;
const CARD_WIDTH = 320;

export const CourseworkCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setIndex((i) =>
      i === 0 ? Math.max(classesTaken.length - CARDS_TO_SHOW, 0) : i - 1
    );
  };
  const next = () => {
    setDirection(1);
    setIndex((i) =>
      i + CARDS_TO_SHOW >= classesTaken.length ? 0 : i + 1
    );
  };

  const visibleCourses = [];
  for (let i = 0; i < CARDS_TO_SHOW; i++) {
    visibleCourses.push(classesTaken[(index + i) % classesTaken.length]);
  }

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
      <div className="overflow-hidden w-full">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{
            transform: `translateX(-${index * (CARD_WIDTH + 24)}px)`, // 24px = gap-6
            width: `${classesTaken.length * (CARD_WIDTH + 24)}px`,
          }}
        >
          {classesTaken.map((course, idx) => (
            <div
              key={course.title + idx}
              className="bg-black/2 border border-white/10 rounded-xl p-6 shadow-lg w-full max-w-xs flex-shrink-0"
              style={{ width: `${CARD_WIDTH}px` }}
            >
              <h4 className="text-xl font-bold mb-2 text-blue-400">{course.title}</h4>
              <p className="text-gray-300 mb-2">{course.description}</p>
              <ul className="flex flex-wrap gap-2 mb-2">
                {course.skills.map((skill, i) => (
                  <li key={i} className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={prev}
          className="px-4 py-2 rounded bg-gray-900/80 text-white hover:bg-blue-600 transition cursor-pointer"
          aria-label="Previous"
        >
          &#8592; Prev
        </button>
        <button
          onClick={next}
          className="px-4 py-2 rounded bg-gray-900/80 text-white hover:bg-blue-600 transition cursor-pointer"
          aria-label="Next"
        >
          Next &#8594;
        </button>
      </div>
      <div className="mt-2 text-gray-400 text-sm">
        Showing {index + 1} - {Math.min(index + CARDS_TO_SHOW, classesTaken.length)} of {classesTaken.length}
      </div>
    </div>
  );
};