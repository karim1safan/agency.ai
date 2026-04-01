import React from "react";
import Title from "./Title";
import { teamData } from "../assets/assets";
import TeamCard from "./TeamCard";
import { motion as Motion } from "motion/react";

function Teams() {
  return (
    // Teams Component
    <Motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren: 0.2}}
    viewport={{ once: true }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white"
    >
      <Title
        title="Meet the team"
        description="A passionate team of digital experts dedicated to your brands success."
      />

      <Motion.div
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
      >
        {teamData.map((person, index) => (
          <Motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: index * 0.2}}
            viewport={{ once: true }}
            key={index}
          >
            <TeamCard person={person} />
          </Motion.div>
        ))}
      </Motion.div>
    </Motion.div>
  );
}

export default Teams;
