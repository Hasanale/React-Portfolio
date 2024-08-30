import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
