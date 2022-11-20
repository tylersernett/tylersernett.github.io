# Personal Portfolio React App

Issue: getting the navbar text and nav dots to respond to scrolling.

Solution: give each navbar element container div a Ref, and then use the div position relative to the window's inner height -- [Ref].current.offsetTop - window.scrollY  < window.innerHeight / 2 
```Javascript
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

  //...
      <LineGradient />
      <div ref={skillsRef} className='w-5/6 mx-auto md:h-full mb-16'>
          <MySkills />
      </div>

      <LineGradient />
      <div ref={projectsRef} className='w-5/6 mx-auto'>
          <Projects />
      </div>
      //etc...
  ```