import React from "react";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { MdDownload } from "react-icons/md";
import { Link } from "react-scroll";

function Banner() {
  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center justify-center lg:gap-x-12 ">
          {/* text */}
          <div className="flex-1 w-[50%] text-center font-secondary lg:text-left ">
            <h1 className="text-[50px] font-bold leading-[0.8] lg:text-[80px]">
              Hassan <span>Ali</span>
            </h1>
            <div className="mb-6 text-[30px] lg:text-[40px] font-secondary uppercase font-semibold leading-[1]">
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
            </div>
            <p className="mb-8 mx-w-lg mx-auto lg:max-0 ">
              I'm a dedicated web developer with a passion for crafting
              responsive, user-friendly, and visually engaging websites. With 1
              year of experience, I specialize in HTML, CSS, JavaScript, and
              modern frameworks like React and Tailwind CSS.
            </p>
            <div className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-6">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaGithub />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
            <div className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
              <button className="btn btn-lg">
                <Link to="contact" smooth={true} spy={true} offset={-200}>
                  Contact me
                </Link>
              </button>
              <a
                href="#"
                className="flex items-center text-gradient btn-link gap-x-2"
              >
                My Resume
                <MdDownload className="text-white text-[20px]" />
              </a>
            </div>
          </div>
          {/* code */}
          <div className="w-[50%] from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
            <div className="flex flex-row">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
              <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
              <div className="flex flex-row space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-200"></div>
              </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{"{"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">Hassan Ali</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['`}</span>
                  <span className="text-amber-300">HTML</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">CSS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">JavaScript</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">ReactJs</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Bootstrap</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Tailwind CSS</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Git</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">Figma</span>
                  <span className="text-gray-400">{"', '"}</span>
                  <span className="text-amber-300">MySQL</span>
                  <span className="text-gray-400">{"'],"}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    hardWorker:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    quickLearner:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">
                    problemSolver:
                  </span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">
                    hireable:
                  </span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{"() {"}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">
                    return
                  </span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span>
                </div>
                <div>
                  <span className="text-gray-400">{`};`}</span>
                </div>
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
