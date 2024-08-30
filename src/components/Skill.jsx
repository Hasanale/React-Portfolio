import React from "react";
import Marquee from "react-fast-marquee";

function Skill() {
  const skillsData = [
    { name: "HTML", image: "../../public/skills/html.svg" },
    { name: "CSS", image: "../../public/skills/css.svg" },
    { name: "JavaScript", image: "../../public/skills/javascript.svg" },
    { name: "React", image: "../../public/skills/react.svg" },
    { name: "Tailwind", image: "../../public/skills/tailwind.svg" },
    { name: "MySQL", image: "../../public/skills/mysql.svg" },
    { name: "Git", image: "../../public/skills/git.svg" },
    { name: "Bootstrap", image: "../../public/skills/bootstrap.svg" },
    { name: "Figma", image: "../../public/skills/figma.svg" },
    { name: "Firebase", image: "../../public/skills/firebase.svg" },
    { name: "MaterialUI", image: "../../public/skills/materialui.svg" },
    { name: "Photoshop", image: "../../public/skills/photoshop.svg" },
    { name: "Illustrator", image: "../../public/skills/illustrator.svg" },
    {
      name: "MS Office",
      image: "../../public/skills/microsoftoffice.svg",
    },
    { name: "WordPress", image: "../../public/skills/wordpress.svg" },
    { name: "ViteJS", image: "../../public/skills/vitejs.svg" },
    { name: "Adobe XD", image: "../../public/skills/adobe-xd.svg" },
    { name: "Canva", image: "../../public/skills/canva.svg" },
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
