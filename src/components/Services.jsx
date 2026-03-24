import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServicesCard from "./ServicesCard";

function Services() {
  const servicesData = [
    {
      id: 1,
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      id: 2,
      title: "Content marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      id: 3,
      title: "Content writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      id: 4,
      title: "Social Media",
      description:
        "We help you build a strong social media presence and engage with your audience.",
      icon: assets.social_icon,
    },
  ];

  return (
    // Services Component
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        alt="bg_image2"
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <Title title="How can we help?" description="From strategy to execution, we craft digital solutions that move your
        business forward." />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service) => (
          // services card component 
          <ServicesCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
