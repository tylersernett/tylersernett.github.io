import React, { useEffect } from 'react'
// import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import SocialMediaIcons from '../components/SocialMediaIcons'

async function PingServers() {
    //Spin up portfolio pieces for visitors (slow free servers, can take 30+ seconds)
    await fetch("https://tetris-javascript.onrender.com/highscores");
    await fetch("https://the-hood-backend-strapi-fly.fly.dev/api/items?populate=*");
}

const Landing = () => {
    // const isAboveLargeScreens = useMediaQuery('(min-width: 1060px)')

    useEffect(() => {
        PingServers();
    }, [])


    return (
        <section id='home'
            className='md:flex md:justify-between md:items-center md:h-full gap-16 pb-16 pt-12'>

            {/* IMAGE SECTION */}
            {/* <div className="md:order-2 basis-3/5 z-10 mt-16 md:mt-32 flex justify-center">
                {isAboveLargeScreens ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px]
                        before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                            alt="profile"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
                            src="assets/profile-image.png"
                        />
                    </div>
                ) : (
                    <img
                        alt="profile"
                        className="z-10 w-full max-w-[400px] md:max-w-[600px]"
                        src="assets/profile-image.png"
                    />
                )}
            </div> */}
            {/* MAIN SECTION */}
            <div className='z-30 basis-[65%] mt-32 md:mt-32'>
                {/* HEADINGS */}
                <motion.div
                // className='relative'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <h1 className='relative text-5xl xs:text-6xl font-playfair z-20 text-center md:text-start'>
                        <span className='xs:relative text-white z-20
                                xs:before:content-brush before:absolute before:left-[72px]
                                before:-top-[115px] before:z-[-1]'
                        >Tyler  <span className='xs:relative xs:text-deep-blue xs:font-semibold'>Johnson</span></span>
                    </h1>

                    <div className='relative mt-12 text-center md:text-start z-20'>
                        <p className='text-xl md:text-2xl '>
                            Web developer seeking full time positions.
                        </p>
                        <p className='text-base md:text-lg'>
                            Special Interests: Education, Music, Design, Alternative Transportation
                        </p>
                    </div>

                </motion.div>

                {/* CALL TO ACTIONS */}
                <motion.div
                    className='flex mt-12 justify-center md:justify-start'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <AnchorLink
                        className='rounded-sm bg-gradient-rainblue py-0.5 px-0.5 h-[48px]'
                        href='#contact'
                    >
                        <div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center
                        font-playfair px-10'>Contact Me</div>
                    </AnchorLink>
                </motion.div>
                <motion.div
                    className='flex justify-center md:justify-start mt-4'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <SocialMediaIcons />

                </motion.div>
            </div>

        </section>
    )
}

export default Landing