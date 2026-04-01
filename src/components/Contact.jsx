import React, { useState } from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion as Motion } from "motion/react";

function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [accept, setAccept] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAccept(true);

    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.message === "" ||
      formData.message < 50
    ) {
      return;
    }

    // POST: send to api
    const data = {
      access_key: "58469ebd-1e08-43e9-8c8c-aa1c4db87ffb",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      console.log(result);

      if (result.success) {
        toast.success("Data has been submitted successfully!");
        e.target.reset();
      }

      setAccept(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    // Contact US Component
    <Motion.div
      initial="hidden"
      whileInView="visible"
      transition={{staggerChildren: 0.2}}
      viewport={{ once: true }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Reach out to us"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <Motion.form
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
        onSubmit={handleSubmit}
      >
        <div>
          <label
            htmlFor="username"
            className="mb-2 text-sm font-medium inline-block"
          >
            Your name
          </label>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 ">
            <img src={assets.person_icon} alt="person_icon" />
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your name"
              className="w-full p-3 text-sm outline-none"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          {formData.username === "" && accept && (
            <small className="text-red-500">username is required</small>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 text-sm font-medium inline-block"
          >
            Email Address
          </label>
          <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 ">
            <img src={assets.email_icon} alt="email_icon" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full p-3 text-sm outline-none"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {formData.email === "" && accept && (
            <small className="text-red-500">email is required</small>
          )}
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="mb-2 text-sm font-medium inline-block"
          >
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={8}
            spellCheck={false}
            placeholder="Enter your message !"
            className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <div className="flex justify-between items-center">
            {accept && formData.message.length < 50 && (
              <small className="text-red-500">
                Message must be at least 50 characters
              </small>
            )}
            <small className="text-gray-400 mt-2 ml-2">
              {formData.message.length}/50
            </small>
          </div>
        </div>

        <button
          className="w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
          type="submit"
        >
          Submit
          <img src={assets.arrow_icon} alt="arrow_icon" className="w-4" />
        </button>
      </Motion.form>
    </Motion.div>
  );
}

export default Contact;
