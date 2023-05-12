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

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  const navPages = ["Home", "Skills", "Projects", "Contact"];
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    //change selectedPage based on scroll position
    const handleScroll = () => {
      const scrollYIsBetweenRefs = (first, second = null) => {
        return (
          first.current.offsetTop - window.scrollY < window.innerHeight / 2 &&
          (!second || second.current.offsetTop - window.scrollY >= window.innerHeight / 2)
        );
      };
      if (window.scrollY === 0) {
        setSelectedPage("home");
      } else if (scrollYIsBetweenRefs(skillsRef, projectsRef)) {
        setSelectedPage("skills");
      } else if (scrollYIsBetweenRefs(projectsRef, contactRef)) {
        setSelectedPage("projects");
      } else if (scrollYIsBetweenRefs(contactRef)) {
        setSelectedPage("contact");
      } else {
        setSelectedPage("home");
      }
    }

    const debouncedHandleScroll = debounce(handleScroll, 100); // Debounce scroll event handler
    window.addEventListener("scroll", debouncedHandleScroll);
    
    //check if at top (top recolor navbar) -- don't debounce this; needs immediate response
    const topCheck = () => {
      setIsTopOfPage(window.scrollY === 0);
    }
    window.addEventListener("scroll", topCheck);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('scroll', topCheck);
    }
  }, []);

  //debounce: use to prevent handleScroll from firing constantly (the selectedPage doesn't need to update mid-scroll, only when scroll has ended)
  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  return (
    <div className="app bg-deep-blue">
      <header>
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} navPages={navPages} />
        <div className='w-5/6 mx-auto'>
          {isAboveMediumScreens && (
            <DotGroup selectedPage={selectedPage} navPages={navPages} />
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

      <LineGradient />
      <div ref={contactRef} className='w-5/6 mx-auto'>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
