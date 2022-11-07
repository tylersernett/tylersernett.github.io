import React from 'react'
import LineGradient from '../components/LineGradient'
import { motion } from 'framer-motion'

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
        // animation happens for children with 0.2 sec gap in between
    }
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Project = ({title}) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 
        bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
    const projectTitle = title.split(" ").join("-").toLowerCase();
    return (
        <motion.div variants={projectVariant} className='relative'>
            <div className={overlayStyles}>
                <p className='text-2xl font-playfair'>{title}</p>
                <p className='mt-7 '>
                Facilisis sed odio morbi quis commodo odio aenean sed. 
                Etiam sit amet nisl purus in mollis nunc sed id.  
                </p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className='pt-48 pb-48'>
            {/* HEADING */}
            <motion.div
                className='md:w-2/5 mx-auto text-center'
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <p className='font-playfair font-semibold text-4xl'>
                        PRO<span className='text-red'>JECTS</span>
                    </p>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                <p className='mt-10 mb-10'>
                    Magna fermentum iaculis eu non diam phasellus.
                    Ornare arcu dui vivamus arcu felis bibendum ut tristique et.
                    Sem integer vitae justo eget.
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className='flex justify-center'>
                <motion.div
                    className='sm:grid sm:grid-cols-3'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.2 }} //bug: high amount will prevent project animations from firing on small screens
                    variants={container}
                >
                    <div className='flex justify-center text-center items-center p-10 bg-blue 
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
                    >
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Project 1"></Project>
                    <Project title="Project 2"></Project>
                    <Project title="Project 3"></Project>
                    <Project title="Project 4"></Project>
                    <Project title="Project 5"></Project>
                    <Project title="Project 6"></Project>
                    <Project title="Project 7"></Project>
                    <div className='flex justify-center text-center items-center p-10 bg-yellow 
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
                    >
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects