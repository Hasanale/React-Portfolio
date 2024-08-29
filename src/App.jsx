import { useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skill from "./components/Skill";
import Services from "./components/Services";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Banner />
      <Nav />
      <About />
      <Timeline />
      <Skill />

      <Work />
      <Contact />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}

export default App;
