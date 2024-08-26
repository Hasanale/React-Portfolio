import React from "react";
function Header() {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#" className="text-gradient text-4xl font-bold">
            HA
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
