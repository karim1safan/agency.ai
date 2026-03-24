import React from "react";

function WorkCard({ work }) {
  return (
    <div
      className="hover:scale-102 duration-500 transition-all cursor-pointer transform-none"
      style={{ opacity: "1" }}
    >
      <img src={work.image} alt={work.title} className="w-full rounded-xl" />
      <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
      <p className="text-sm opacity-60 w-5/6">{work.description}</p>
    </div>
  );
}

export default WorkCard;
