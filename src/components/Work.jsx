import React from "react";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";
import Img4 from "../assets/Untitled design.png";

function Work() {
  return (
    <section id="skills">
      <div className="px-10">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-6 mb-10 lg:mb-0 ">
            {/* image 1 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img1}
                alt=""
              />
              {/* pre-tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transitio duration-500 z-50 ">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transitio duration-700 z-50 ">
                <span className="text-3xl text-white "></span>
              </div>
            </div>
            {/* image 2 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img2}
                alt=""
              />
              {/* pre-tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transitio duration-500 z-50 ">
                <span className="text-gradient">Front-end Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transitio duration-700 z-50 ">
                <span className="text-3xl text-white "></span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-y-6">
            {/* img-3 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img4}
                alt=""
              />
              {/* pre-tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transitio duration-500 z-50 ">
                <span className="text-gradient">WordPress Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transitio duration-700 z-50 ">
                <span className="text-3xl text-white "></span>
              </div>
            </div>

            {/* img-4 */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img3}
                alt=""
              />
              {/* pre-tittle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transitio duration-500 z-50 ">
                <span className="text-gradient">HTML Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transitio duration-700 z-50 ">
                <span className="text-3xl text-white "></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
