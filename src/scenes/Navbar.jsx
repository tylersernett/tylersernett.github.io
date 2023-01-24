import React, { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage, setIsMenuToggled }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}
         hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => {
                setSelectedPage(lowerCasePage);
                setIsMenuToggled(false)
            }}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState();
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    const navbarBackground = isTopOfPage? "" : "bg-red";
    
    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-3`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold">TSJ</h4>
                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className='flex justify-between gap-16 font-opensans text-sm md:text-base font-semibold'>
                        {/* TODO: cleanup -- make this component, keep DRY, useContext */}
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                ) : (
                    // SMALL SCREEN NAV
                    <button className='rounded-full bg-red p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img alt="menu-icon" src='../assets/menu-icon.svg'></img>
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isAboveSmallScreens && isMenuToggled && (
                    <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
                        {/* CLOSE ICON */}
                        <div className='flex justify-end p-12'>
                            <button onClick={() => setIsMenuToggled(false)}>
                                <img alt="close-icon" src='../assets/close-icon.svg'></img>
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue '>
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setIsMenuToggled={setIsMenuToggled}/>
                            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setIsMenuToggled={setIsMenuToggled}/>
                            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setIsMenuToggled={setIsMenuToggled}/>
                            <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setIsMenuToggled={setIsMenuToggled} />
                            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} setIsMenuToggled={setIsMenuToggled}/>
                        </div>
                    </div>
                )}
                    </div>
        </nav>
    )
}

export default Navbar