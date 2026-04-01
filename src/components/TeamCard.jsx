import React from "react";
import { motion as Motion } from "motion/react";

function TeamCard({person}) {
  return (
    <Motion.div
      className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 transition-all duration-400"
    >
      <img
        src={person.image}
        alt={person.name}
        className="w-12 h-12 rounded-full"
      />
      <div className="flex-1">
        <h3 className="font-bold text-sm">{person.name}</h3>
        <p className="text-xs opacity-60">{person.title}</p>
      </div>
    </Motion.div>
  );
}

export default TeamCard;
