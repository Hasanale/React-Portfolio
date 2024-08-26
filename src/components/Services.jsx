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
  {
    name: "Digital Marketing",
    description:
      "Im a dedicated web developer with a passion for crafting responsive, user-friendly, and visually engaging websites. With 1  year of experience.",
    link: "Learn more",
  },
];
function Services() {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div>
          {/* text */}
          <div>
            <h2 className="h2 text-accent mb-6">What I Offer.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I'm a dedicated web developer with a passion for crafting
              responsive websites.
            </h3>
            <button className="btn btn-sm">See My Work</button>
          </div>
          {/* services */}
          <div>Services</div>
        </div>
      </div>
    </div>
  );
}

export default Services;
