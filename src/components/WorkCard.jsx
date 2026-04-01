import React from "react";
import { motion as Motion } from "motion/react";

function WorkCard({ work }) {
  return (
    <Motion.div
      className="duration-500 transition-all cursor-pointer"
    >
      <img src={work.image} alt={work.title} className="w-full rounded-xl" />
      <h3 className="mt-3 mb-2 text-lg font-semibold">{work.title}</h3>
      <p className="text-sm opacity-60 w-5/6">{work.description}</p>
    </Motion.div>
  );
}

export default WorkCard;
