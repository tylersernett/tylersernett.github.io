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
  // const testimonialsRef = useRef();
  const contactRef = useRef();
  useEffect(() => {
    //change selectedPage based on scroll position
    const handleScroll = () => {
      const scrollYIsBetweenRefs = (first, second = null) => {
        if (!second) {
          return first.current.offsetTop - window.scrollY < window.innerHeight / 2;
        } else {
          return first.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
            second.current.offsetTop - window.scrollY >= window.innerHeight / 2;
        }
      }

      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else if (scrollYIsBetweenRefs(skillsRef, projectsRef)) {
        setSelectedPage("skills");
      } else if (scrollYIsBetweenRefs(projectsRef, contactRef)) {
        setSelectedPage("projects");
      // } else if (scrollYIsBetweenRefs(testimonialsRef, contactRef)) {
      //   setSelectedPage("testimonials");
      } else if (scrollYIsBetweenRefs(contactRef)) {
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
      <header>
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} />
        <div className='w-5/6 mx-auto'>
          {isAboveMediumScreens && (
            <DotGroup selectedPage={selectedPage} />
          )}
          <div>
            <Landing />
          </div>
        </div>
      </header>

      <LineGradient />
      <div ref={skillsRef} className='w-5/6 mx-auto'>
        <MySkills />
      </div>

      <LineGradient />
      <div ref={projectsRef} className='w-5/6 mx-auto'>
        <Projects />
      </div>

      {/* <LineGradient />
      <div ref={testimonialsRef} className='w-5/6 mx-auto'>
        <Testimonials />
      </div> */}

      <LineGradient />
      <div ref={contactRef} className='w-5/6 mx-auto'>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
//TODO: add underline to navbar

//TODO: project focus ring visibility
//TODO: contrast: yellow at bottom & navbar, fieldboxes, (X) on mobile menu
//TODO: gap in project cards
//TODO: single contact button
//TODO: left align headings
//TODO: swap form / image in Contact section
//TODO: mobile menu modal focus
//TODO: format TSJ mobile as <p> instead of h4
//TODO: social icons: <a arialabel=''> <svg> </a>