import React, { useState } from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";

function Nav() {
  const [tooltip, setTooltip] = useState("");

  const handleMouseEnter = (text) => {
    setTooltip(text);
  };

  const handleMouseLeave = () => {
    setTooltip("");
  };

  return (
    <nav className="fixed bottom-2 lg:bottom-3 w-full  z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[76px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2xl text-white/50 items-center relative">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center relative"
            onMouseEnter={() => handleMouseEnter("Home")}
            onMouseLeave={handleMouseLeave}
          >
            <BiHomeAlt />
            {tooltip === "Home" && (
              <div className="absolute bottom-[75px] flex flex-col items-center">
                <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md relative">
                  Home
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
                </div>
              </div>
            )}
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center relative"
            onMouseEnter={() => handleMouseEnter("About")}
            onMouseLeave={handleMouseLeave}
          >
            <BiUser />
            {tooltip === "About" && (
              <div className="absolute bottom-[75px] flex flex-col items-center">
                <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md relative">
                  About
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
                </div>
              </div>
            )}
          </Link>
          <Link
            to="history"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center relative"
            onMouseEnter={() => handleMouseEnter("Experience")}
            onMouseLeave={handleMouseLeave}
          >
            <BsClipboardData />
            {tooltip === "History" && (
              <div className="absolute bottom-[75px] flex flex-col items-center">
                <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md relative">
                  History
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
                </div>
              </div>
            )}
          </Link>
          <Link
            to="skills"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center relative"
            onMouseEnter={() => handleMouseEnter("Skills")}
            onMouseLeave={handleMouseLeave}
          >
            <BsBriefcase />
            {tooltip === "Skills" && (
              <div className="absolute bottom-[75px] flex flex-col items-center">
                <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md relative">
                  Skills
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
                </div>
              </div>
            )}
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center relative"
            onMouseEnter={() => handleMouseEnter("Contact")}
            onMouseLeave={handleMouseLeave}
          >
            <BsChatSquareText />
            {tooltip === "Contact" && (
              <div className="absolute bottom-[75px] flex flex-col items-center">
                <div className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md relative">
                  Contact
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
                </div>
              </div>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
