import React from "react";
import { Link } from "react-scroll";
function Header() {
  return (
    <header className=" pb-10">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-gradient text-4xl font-bold">
            HA
          </a>
          <Link to="contact" smooth={true} spy={true} offset={-200}>
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
