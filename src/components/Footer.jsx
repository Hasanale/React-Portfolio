import React from "react";

function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <div className="pb-20 text-center  xl:text-start xl:pb-8 xl:pl-7">
      &copy; {currentyear} Hassan Ali. All rights reserved.
    </div>
  );
}

export default Footer;
