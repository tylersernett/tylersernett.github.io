import { useEffect, useState, useRef } from "react";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";
import Contact from "./scenes/Contact";
import DotGroup from "./scenes/DotGroup";
import Footer from "./scenes/Footer";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Navbar from "./scenes/Navbar";
import Projects from "./scenes/Projects";
import Testimonials from "./scenes/Testimonials";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const skillsRef = useRef();
  const projectsRef = useRef();
  const testimonialsRef = useRef();
  const contactRef = useRef();
  useEffect(() => {
    //change selectedPage based on scroll position
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else if (skillsRef.current.offsetTop - window.scrollY < window.innerHeight / 2 && projectsRef.current.offsetTop - window.scrollY >= window.innerHeight / 2) {
        setSelectedPage("skills");
      } else if (projectsRef.current.offsetTop - window.scrollY < window.innerHeight / 2 && testimonialsRef.current.offsetTop - window.scrollY >= window.innerHeight / 2) {
        setSelectedPage("projects");
      } else if (testimonialsRef.current.offsetTop - window.scrollY < window.innerHeight / 2 && contactRef.current.offsetTop - window.scrollY >= window.innerHeight / 2) {
        setSelectedPage("testimonials");
      } else if (contactRef.current.offsetTop - window.scrollY < window.innerHeight / 2) {
        setSelectedPage("contact");
      } else {
        setSelectedPage("home");
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <div className='w-5/6 mx-auto md:h-full mb-16'>
        {isAboveMediumScreens && (
          <DotGroup selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        )}
        <div>
          <Landing setSelectedPage={setSelectedPage} />
        </div>
      </div>

      <LineGradient />
      <div ref={skillsRef} className='w-5/6 mx-auto md:h-full mb-16'>
          <MySkills />
      </div>

      <LineGradient />
      <div ref={projectsRef} className='w-5/6 mx-auto'>
          <Projects />
      </div>

      <LineGradient />
      <div ref={testimonialsRef} className='w-5/6 mx-auto md:h-full mb-32'>
          <Testimonials />
      </div>

      <LineGradient />
      <div ref={contactRef} className='w-5/6 mx-auto md:h-full'>
          <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
