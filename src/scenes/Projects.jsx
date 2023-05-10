import React from 'react'
import LineGradient from '../components/LineGradient'
import { motion } from 'framer-motion'

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 }
        // animation happens for children with 0.15 sec gap in between
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
        stack: ['Javascript', 'Express', 'Node', 'MongoDB', 'Mongoose'],
        live: 'https://tylersernett.github.io/tetris-javascript/',
        code: 'https://github.com/tylersernett/tetris-javascript'
    },
    {
        name: 'Notflicks',
        description: 'Front end clone of the Netflix UI built with Tailwind styling.',
        stack: ['React', 'Firebase', 'Tailwind', 'Axios'],
        live: 'https://tylersernett.github.io/netflixclone/',
        code: 'https://github.com/tylersernett/netflixclone'
    },
    {
        name: 'GRE Dashboard',
        description: 'Accessible front end recreation of the GRE testing interface including a test timer and a calculator.',
        stack: ['React', 'Bootstrap'],
        live: 'https://tylersernett.github.io/grecalc/',
        code: 'https://github.com/tylersernett/grecalc'
    },
    {
        name: 'Hex Color Trainer',
        description: 'Responsive mini-game where users guess the hexadecimal code of the displayed color.',
        stack: ['React'],
        live: 'https://tylersernett.github.io/hexcolorgame/',
        code: 'https://github.com/tylersernett/hexcolorgame'
    },
    {
        name: 'Personal Portfolio',
        description: "View the code of this site.",
        stack: ['React', 'Tailwind', 'Framer Motion', 'Formik', 'Yup'],
        live: '#0',
        code: 'https://github.com/tylersernett/personal-portfolio'
    },
];

const Project = ({ projectObj }) => {
    const overlayStyles = `rounded absolute h-full w-full opacity-0 hover:opacity-95 focus-within:opacity-95 transition duration-500 
        bg-gray-50 z-30 flex flex-col justify-center items-center text-center py-8 px-4 text-deep-blue`;
    const projectTitle = projectObj.name.split(" ").join("-").toLowerCase();
    return (
        <motion.div variants={projectVariant} className='relative'>
            <div className={overlayStyles}>
                <p className='text-red text-2xl font-playfair'>{projectObj.name}</p>
                <p className='mt-5 text-base '>
                    {projectObj.description}
                </p>
                <p className='mt-5 block md:inline-block'>
                    {projectObj.stack.map((item, index) => (
                        <span key={item} className='text-base '>
                            <i>{item}</i>
                            {/* add diamonds to all but last */}
                            <span className='text-red'>{index < projectObj.stack.length - 1 ? " ⬩ " : ""}</span>
                        </span>
                    ))}
                </p>
                <span className='mt-5 text-base' >
                    <a className='cursor-pointer underline text-red focus:outline-none focus:ring focus:ring-offset-1 focus:ring-red focus:rounded-sm' href={projectObj.live}>live</a>
                    &nbsp;|&nbsp;
                    <a className='cursor-pointer underline text-red focus:outline-none focus:ring focus:ring-offset-1 focus:ring-red focus:rounded-sm' href={projectObj.code}>code</a></span>
            </div>
            <div className='flex justify-center text-center items-center
                        max-w-[400px] max-h-[400px]'>
                <img src={`../assets/${projectTitle}.png`} alt={projectTitle} className='rounded' />
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
                    <h2 className='font-playfair font-semibold text-4xl'>
                        PRO<span className='text-red'>JECTS</span>
                    </h2>
                    <div className='flex justify-center mt-5'>
                        <LineGradient width="w-1/3" />
                    </div>
                </div>
                <p className='mt-10 mb-10'>
                    {/* Descriptive text here */}
                </p>
            </motion.div>

            {/* PROJECTS */}
            <div className='flex justify-center'>
                <motion.div
                    className='grid grid-cols-1 gap-1.5 sm:grid-cols-2  md:grid-cols-3'
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