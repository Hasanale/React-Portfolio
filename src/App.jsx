import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";

function App() {
  const [toggleDarkMode, setToggleDarkMode] = useState(true);

  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: toggleDarkMode ? "dark" : "light", // handle the dark mode state on toggle
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#131052",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <IconButton
          onClick={toggleDarkTheme}
          className="fixed left-[50%] translate-x-[-50%]"
        >
          {toggleDarkMode ? <LightMode /> : <DarkMode />}
        </IconButton>

        <Header />
        <Banner />
        <Nav />
        <About />
        <Timeline />
        <Skill />
        <Work />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
