import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Banner() {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Hassan <span>Ali</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary uppercase font-semibold leading-[1]"
            >
              <span className="text-white mr-4">I am a </span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "Freelancer",
                  2000,
                  "Designer",
                  2000,
                ]}
                speed={250}
                repeat={Infinity}
                wrapper="span"
                className="text-accent"
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mx-w-lg mx-auto lg:max-0 "
            >
              I'm a dedicated web developer with a passion for crafting
              responsive, user-friendly, and visually engaging websites. With 1
              year of experience, I specialize in HTML, CSS, JavaScript, and
              modern frameworks like React and Tailwind CSS.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              // variants={fadeIn("up", 0.7)}
              // initial="hidden"
              // whileInView={"show"}
              // viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] "
          >
            {/* <img src={Image} alt="" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
