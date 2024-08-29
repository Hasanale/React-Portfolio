import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { Link } from "react-scroll";
import { BsArrowDown } from "react-icons/bs";

function About() {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-15 lg:gap-y-0 h-screen lg:justify-center lg:w-[700px]">
          <div className="flex-1">
            <h2 className="h2 text-accent  text-[55px]">About Me</h2>
            <h3 className="h3 mb-4 ">I'm a dedicated web developer.</h3>
            <p className="mb-6">
              I'm a dedicated web developer with a passion for crafting
              responsive, user-friendly, and visually engaging websites. With 1
              year of experience, I specialize in HTML, CSS, JavaScript, and
              modern frameworks like React and Tailwind CSS.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12 ">
              <div>
                <div className="text-[40px] font-tertiary text-gradient  mb-2  ">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient  mb-2  ">
                  {inView ? <CountUp start={0} end={15} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient  mb-2  ">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
