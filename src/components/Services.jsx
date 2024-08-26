import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Web Development",
    description:
      "Im a dedicated web developer with a passion for crafting responsive, user-friendly, and visually engaging websites. With 1  year of experience.",
    link: "Learn more",
  },
  {
    name: "SEO",
    description:
      "Im a dedicated web developer with a passion for crafting responsive, user-friendly, and visually engaging websites. With 1  year of experience.",
    link: "Learn more",
  },
  // {
  //   name: "Digital Marketing",
  //   description:
  //     "Im a dedicated web developer with a passion for crafting responsive, user-friendly, and visually engaging websites. With 1  year of experience.",
  //   link: "Learn more",
  // },
];
function Services() {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="h2 text-accent mb-6 ">What I Offer.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a dedicated web developer with a passion for crafting
              responsive websites.
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 "
          >
            {/* services list */}
            <div>
              {services.map((services, index) => {
                const { name, description, link } = services;
                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight ">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end ">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[42px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href="#" className="text-gradient text-sm">
                        {link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Services;
