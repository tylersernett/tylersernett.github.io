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

const projectsArr = [
    {
        name: 'The Hood eStore',
        description: 'Digital storefront for local Las Cruces, NM business specializing in jewelry, art, and events.',
        stack: ['React', 'Redux', 'Material UI', 'Strapi', 'Stripe', 'Formik', 'Yup'],
        live: 'https://tylersernett.github.io/react-ecommerce/',
        code: 'https://github.com/tylersernett/react-ecommerce'
    },
    {
        name: 'JSTetris',
        description: 'Minimalist remake of the NES Tetris port with color-blind accessible design.',
        stack: ['React', 'Redux', 'Material UI', 'Strapi', 'Stripe', 'Formik', 'Yup'],
        live: 'https://tylersernett.github.io/tetris-javascript/',
        code: 'https://github.com/tylersernett/tetris-javascript'
    },
    {
        name: 'Notflix',
        description: 'Front end clone of the Netflix UI built with Tailwind styling.',
        stack: ['React', 'Redux', 'Material UI', 'Strapi', 'Stripe', 'Formik', 'Yup'],
        live: 'https://tylersernett.github.io/netflixclone/',
        code: 'https://github.com/tylersernett/netflixclone'
    },
    {
        name: 'GRE Dashboard',
        description: 'Accessible front end recreation of the GRE testing interface including a test timer and a calculator.',
        stack: ['React', 'Redux', 'Material UI', 'Strapi', 'Stripe', 'Formik', 'Yup'],
        live: 'https://tylersernett.github.io/grecalc/',
        code: 'https://github.com/tylersernett/grecalc'
    },
    {
        name: 'Hex Color Trainer',
        description: 'Responsive mini-game where users guess the hexadecimal code of the displayed color.',
        stack: ['React', 'Redux', 'Material UI', 'Strapi', 'Stripe', 'Formik', 'Yup'],
        live: 'https://tylersernett.github.io/hexcolorgame/',
        code: 'https://github.com/tylersernett/hexcolorgame'
    },
    {
        name: 'Personal Portfolio',
        description: "View the code of this site.",
        stack: ['React', 'Redux', 'Material UI', 'Strapi', 'Stripe', 'Formik', 'Yup'],
        live: '#0',
        code: 'https://github.com/tylersernett/personal-portfolio'
    },
];

const Project = ({ projectObj }) => {
    const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-95 transition duration-500 
        bg-grey z-30 flex flex-col justify-center items-center text-center py-8 px-4 text-deep-blue`;
    const projectTitle = projectObj.name.split(" ").join("-").toLowerCase();
    return (
        <motion.div variants={projectVariant} className='relative'>
            <div className={overlayStyles}>
                <p className='text-xl lg:text-2xl font-playfair'>{projectObj.name}</p>
                <p className='mt-5 text-sm lg:text-base'>
                    {projectObj.description}
                </p>
                <p className='mt-5 sm:text-sm lg:text-base block sm:hidden md:inline-block'>
                    {projectObj.stack.map((item, index) => (
                        <span key={item}>
                            <i>{item}</i>
                            {/* add diamonds to all but last */}
                            {index < projectObj.stack.length - 1 ? " ⬩ " : ""}
                        </span>
                    ))}
                </p>
                <span className='mt-5 text-sm lg:text-base'><a className='cursor-pointer underline' href={projectObj.live}>live</a> | <a className='cursor-pointer underline' href={projectObj.code}>code</a></span>
            </div>
            <div className='flex justify-center text-center items-center
                        max-w-[400px] max-h-[400px]'>
                <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
            </div>
        </motion.div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className='pt-24 pb-24'>
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
                    viewport={{ once: true, amount: 0.2 }} //bug: high amount will prevent project animations from firing on small screens
                    variants={container}
                >
                    {/* <div className='flex justify-center text-center items-center p-10 bg-blue 
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
                    >
                        BEAUTIFUL USER INTERFACES
                    </div> */}

                    {projectsArr.map((project) => (
                        <Project projectObj={project} key={project.name} />
                    ))}

                    {/* <div className='flex justify-center text-center items-center p-10 bg-yellow 
                        max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
                    >
                        SMOOTH USER EXPERIENCE
                    </div> */}
                </motion.div>
            </div>
        </section>
    )
}

export default Projects