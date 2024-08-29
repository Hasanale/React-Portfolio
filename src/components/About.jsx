import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Link } from "react-scroll";
import Image from "../assets/profile.jpg";

function About() {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-y-8 lg:gap-y-0 lg:h-screen justify-center">
          {/* Text section */}
          <div className="w-full lg:w-1/2 px-4 lg:px-8">
            <h2 className="text-accent text-[35px] sm:text-[45px] lg:text-[55px] font-bold mb-4">
              About Me
            </h2>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4">
              I'm a dedicated web developer.
            </h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6">
              I'm a dedicated web developer with a passion for crafting
              responsive, user-friendly, and visually engaging websites. With 1
              year of experience, I specialize in HTML, CSS, JavaScript, and
              modern frameworks like React and Tailwind CSS.
            </p>
            {/* Stats */}
            <div className="flex flex-wrap gap-x-6 gap-y-4 lg:gap-x-10 mb-12">
              <div className="w-1/2 sm:w-auto">
                <div className="text-[30px] sm:text-[35px] lg:text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div className="w-1/2 sm:w-auto">
                <div className="text-[30px] sm:text-[35px] lg:text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div className="w-1/2 sm:w-auto">
                <div className="text-[30px] sm:text-[35px] lg:text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
          </div>
          {/* Image section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
            <img
              className=" w-3/4 sm:w-1/2 lg:w-3/4 rounded-full border-fuchsia-600 border-solid border-8"
              src={Image}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
