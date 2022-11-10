import { useEffect, useState } from "react";
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
import { motion } from "framer-motion";

function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
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
        <motion.div whileInView={() => setSelectedPage("home")}>
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>

      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full mb-16'>
        <motion.div whileInView={() => setSelectedPage("skills")}>
          <MySkills />
        </motion.div>
      </div>

      <LineGradient />
      <div className='w-5/6 mx-auto'>
        <motion.div whileInView={() => setSelectedPage("projects")}>
          <Projects />
        </motion.div>
      </div>

      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full mb-32'>
        <motion.div whileInView={() => setSelectedPage("testimonials")}>
          <Testimonials />
        </motion.div>
      </div>

      <LineGradient />
      <div className='w-5/6 mx-auto md:h-full'>
        <motion.div whileInView={() => setSelectedPage("contact")}>
          <Contact />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
