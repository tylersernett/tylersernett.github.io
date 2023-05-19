# TSJ Personal Portfolio
A portfolio site to present some of my projects.

## Notes: handleScroll
Issue: getting the navbar text and nav dots to dynamically respond to scrolling.

Solution: give each navbar element container div a Ref, and then use the div position relative to the window's inner height -- [Ref].current.offsetTop - window.scrollY  < window.innerHeight / 2 
(solution adapted from https://stackoverflow.com/questions/63544289/how-to-highlight-navbar-links-on-page-scroll-in-react )
```js
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
      } else if (projectsRef.current.offsetTop - window.scrollY < window.innerHeight / 2 && contactRef.current.offsetTop - window.scrollY >= window.innerHeight / 2) {
        setSelectedPage("projects");
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
This works, but there's a lot of repetitive math above to calculate the bounds of each ref. So, use a function to clean this up:

```js
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
      } else if (scrollYIsBetweenRefs(contactRef)) {
        setSelectedPage("contact");
      } else {
        setSelectedPage("home");
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
```

This can be further improved with debouncing. Currently, the above handleScroll function runs frequently: a user who jumps from the top homepage to the bottom contact page will see the pages in the middle become 'selected' on the way. Through debouncing, the function will be called less frequently, so that the selectedPage only gets updated at the end of the scroll (the middle pages will not become selected during a jump from the top page to bottom page).

```js
  useEffect(() => {
    const handleScroll = () => {
      const scrollYIsBetweenRefs = (first, second = null) => {
        ...
      }
      ...
    }
    const debouncedHandleScroll = debounce(handleScroll, 100); // Debounce scroll event handler

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
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
```

## Notes: Dynamic Tailwind colors

Wrong: don't try to break up class names
```jsx
skill=[{color:"blue"}]
return(
<div className={`border border-${skill.color}`}>
)
```

Right: use the entire class name:
```jsx
skill=[{color:"border-blue"}]
return(
<div className={`border ${skill.color}`}>
)
```

## Notes: Accessibility for hover styles
Use the focus-within pseudo-class to allow style changes when an element receives focus through tabbing.
```js
const overlayStyles = 'hover:opacity-95 focus-within:opacity-95'
```