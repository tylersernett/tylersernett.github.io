import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import ReactModal from 'react-modal';

const Link = ({ page, selectedPage, setIsMenuOpen }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow underline underline-offset-2" : ""}
         hover:text-yellow transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={() => {
                setIsMenuOpen(false)
            }}
        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({ isTopOfPage, selectedPage, navPages }) => {
    const [isMenuOpen, setIsMenuOpen] = useState();
    const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
    const navbarBackground = isTopOfPage ? "" : "bg-red";

    const OVERLAY_STYLES = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.25)',
        zIndex: 999
    }

    //actually styled with tailwind later, this is just dummy info for the ReactModal props
    const CONTENT_STYLES ={
        left: -200,
        width: '50px',
    }

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-3`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <p className="font-playfair text-3xl font-bold">TSJ</p>
                {/* DESKTOP NAV */}
                {isAboveSmallScreens ? (
                    <div className='flex justify-between gap-16 font-opensans text-xl font-bold'>
                        {navPages.map((page) => (
                            <Link key={page} page={page} selectedPage={selectedPage} />
                        ))}
                    </div>
                ) : (
                    // SMALL SCREEN NAV
                    <button className='rounded-full bg-red p-2' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img alt="menu" src='../assets/menu-icon.svg'></img>
                    </button>
                )}

                {/* MOBILE MENU POPUP */}

                {/* MODAL */}
                <ReactModal isOpen={isMenuOpen} onRequestClose={() => setIsMenuOpen(false)}
                style={{ overlay: OVERLAY_STYLES, content:CONTENT_STYLES }}
                shouldCloseOnOverlayClick={true}
                // onAfterOpen={() => {
                //     document.body.style.top = `-${window.scrollY}`
                //     document.body.style.position = 'fixed'
                //   }}
                //   onAfterClose={() => {
                //     const scrollY = document.body.style.top
                //     document.body.style.position = ''
                //     document.body.style.top = ''
                //     window.scrollTo(0, parseInt(scrollY || '0') * -1)
                //   }}
                >
                    <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
                        {/* CLOSE ICON */}
                        <div className='flex justify-end p-12'>
                            <button onClick={() => setIsMenuOpen(false)}>
                                <img alt="close" src='../assets/close-icon.svg'></img>
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue '>
                            {navPages.map((page) => (
                                <Link key={page} page={page} selectedPage={selectedPage} setIsMenuOpen={setIsMenuOpen} />
                            ))}
                        </div>
                    </div>
                </ReactModal>
            </div>
        </nav>
    )
}

export default Navbar