import React from "react";
import Marquee from "react-fast-marquee";
import html from "../../public/skills/html.svg";
import css from "../../public/skills/css.svg";
import javascript from "../../public/skills/javascript.svg";
import react from "../../public/skills/react.svg";
import tailwind from "../../public/skills/tailwind.svg";
import mysql from "../../public/skills/mysql.svg";
import git from "../../public/skills/git.svg";
import bootstrap from "../../public/skills/bootstrap.svg";
import figma from "../../public/skills/figma.svg";
import firebase from "../../public/skills/firebase.svg";
import materialui from "../../public/skills/materialui.svg";
import photoshop from "../../public/skills/photoshop.svg";
import illustrator from "../../public/skills/illustrator.svg";
import microsoftoffice from "../../public/skills/microsoftoffice.svg";
import wordpress from "../../public/skills/wordpress.svg";
import vitejs from "../../public/skills/vitejs.svg";
import adobexd from "../../public/skills/adobe-xd.svg";
import canva from "../../public/skills/canva.svg";

function Skill() {
  const skillsData = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "Tailwind", image: tailwind },
    { name: "MySQL", image: mysql },
    { name: "Git", image: git },
    { name: "Bootstrap", image: bootstrap },
    { name: "Figma", image: figma },
    { name: "Firebase", image: firebase },
    { name: "MaterialUI", image: materialui },
    { name: "Photoshop", image: photoshop },
    { name: "Illustrator", image: illustrator },
    {
      name: "MS Office",
      image: microsoftoffice,
    },
    { name: "WordPress", image: wordpress },
    { name: "ViteJS", image: vitejs },
    { name: "Adobe XD", image: adobexd },
    { name: "Canva", image: canva },
  ];

  return (
    <div
      id="skills"
      className="relative border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="h2 text-accent text-[55px]">Skills</span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="right"
        >
          {skillsData.map((skill, id) => (
            <div
              className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
              key={id}
            >
              <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-white text-sm sm:text-lg">{skill.name}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skill;
