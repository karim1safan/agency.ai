import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import WorkCard from './WorkCard'
import { motion as Motion } from "motion/react";

function Works() {

  const worksData = [
    {
      id: "1",
      title: "Mobile app marketing",
      description: "We turn bold ideas into powerful digital solutions that connect, engage...",
      image: assets.work_mobile_app
    },
    {
      id: "2",
      title: "Dashboard management",
      description: "We help you execute your plan and deliver results.",
      image: assets.work_dashboard_management
    },
    {
      id: "3",
      title: "Fitness app promotion",
      description: "We help you create a marketing strategy that drives results.",
      image: assets.work_fitness_app
    },
    
  ]


  return (
    // our works component 
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{staggerChildren: 0.2}}
      id='our-work'
      className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
    >

      <Title title="Our latest work" description="From strategy to execution, we craft digital solutions that move your business forward." />

      <div

        className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'
      >
        {
          worksData.map(work => (
            <Motion.div 
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: work.id * 0.2}}
            viewport={{ once: true }}
            key={work.id}>
              <WorkCard work={work} />
            </Motion.div>
          ))
        }
      </div>
    </Motion.div>
  )
}

export default Works
