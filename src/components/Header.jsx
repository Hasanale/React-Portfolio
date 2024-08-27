import React from "react";
import { Link } from "react-scroll";
function Header() {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-gradient text-4xl font-bold">
            HA
          </a>
          <button className="btn btn-sm">
            <Link to="contact" smooth={true} spy={true} offset={-200}>
              Work with me
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
