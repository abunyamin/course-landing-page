import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Popular from "./components/Popular";
import Skill from "./components/Skill";
import SectionEducation from "./components/SectionEducation";
import Review from "./components/Review";
import Instructor from "./components/Instructor";
import SectionBottom from "./components/SectionBottom";
import Footer from "./components/Footer";
import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {

  
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    AOS.init();
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Category viewportSize={viewportSize} />
      <Popular />
      <Skill viewportSize={viewportSize}/>
      <SectionEducation />
      <Review viewportSize={viewportSize}/>
      <Instructor />
      <SectionBottom />
      <Footer viewportSize={viewportSize} />
    </>
  );
}

export default App;
