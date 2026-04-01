import React from "react";
import assets from "../assets/assets";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import {motion as Motion} from "motion/react";

function Footer({ theme }) {
  const socialsData = [
    {
      id: "1",
      title: "facebook",
      url: "https://www.facebook.com/profile.php?id=100006472038002",
      icon: <FaFacebook />,
    },
    {
      id: "2",
      title: "github",
      url: "https://github.com/karim1safan",
      icon: <FaGithub />,
    },
    {
      id: "3",
      title: "instagram",
      url: "https://www.instagram.com/karimsafan.cs/",
      icon: <FaInstagram />,
    },
    {
      id: "4",
      title: "linkedin",
      url: "https://www.linkedin.com/in/karimsafan/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    // Footer Component
    <Motion.div 
      initial={{opacity: 0, y: 50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.8}}
      viewport={{ once: true }}
    className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <Motion.div 
          initial={{opacity: 0, y: -30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          viewport={{ once: true }}
        className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="logo"
            className="w-32 sm:w-44"
          />

          <p className="max-w-md">
            From strategy to execution, we craft digital solutions that move
            your business forward.
          </p>

          <ul className="flex gap-8">
            <li>
              <a href="#home" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Service
              </a>
            </li>
            <li>
              <a href="#our-work" className="hover:text-primary">
                Our Work
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </Motion.div>
        <Motion.div 
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.3}}
          viewport={{ once: true }}
        className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm  mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>

          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              id="email"
              className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button
              type="submit"
              className="bg-primary text-white rounded px-6"
            >
              Submit
            </button>
          </div>
        </Motion.div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600  my-6" />

      {/* Footer Bottom */}
      <Motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{ once: true }}
      className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap">
        <p>Copyright {new Date().getFullYear()} © <span className="underline decoration-wavy decoration-primary decoration-2">Karim Safan</span> - All Right Reserved.</p>
        <div className="flex justify-between items-center gap-4">
          {
            socialsData.map((social) => (
              <a href={social.url} target="_blank" className="text-2xl" key={social.id}>
                {social.icon}
              </a>
            ))
          }
        </div>
      </Motion.div>
    </Motion.div>
  );
}

export default Footer;
