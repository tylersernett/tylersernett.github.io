import React from 'react'
import LineGradient from '../components/LineGradient'
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from 'framer-motion'

const skills = [{
    number: '01',
    title: 'Languages',
    list: 'HTML, CSS, Javascript, C#, Python, Lua, GameMaker Language',
    color: 'blue'
},
{
    number: '02',
    title: 'Libraries & Frameworks',
    list: 'React, Redux, Node, Express, Tailwind, Material UI, Mongoose, Bootstrap',
    color: 'red'
},
{
    number: '03',
    title: 'Tools & Databases',
    list: 'Git, Github, Firebase, MongoDB, Strapi, Photoshop, Unity',
    color: 'yellow'
}];

const MySkills = () => {
    
    return (
        <section id="skills" className='pt-16 pb-16'>
            <div className='md:flex md:justify-between md:gap-16 mt-8'>
                <motion.div
                    className='md:w-1/3'
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.50 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <h2 className='font-playfair font-semibold text-4xl mb-5'>
                        MY <span className='text-red'>SKILLS</span>
                    </h2>
                    <LineGradient width="w-1/3" />
                    <p className='mt-10 mb-7'>
                        I'm always open to learning new technologies and I have completed projects using the following:
                    </p>
                </motion.div>
                <div className='mt-16 md:mt-0 hidden md:block'>
                    <div //add blue offset frame
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img alt="skills" className="z-10" src="assets/skills.png" />
                    </div>
                </div>
            </div>
            {/* SKILLS */}
            <div className='md:flex md:justify-between mt-16 gap-32'>

                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.title}
                        className='md:w-1/3 mt-10'
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.0 + 0.2 * index, duration: 0.50 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className='relative min-h-20 md:h-36 text-5xl font-playfair font-semibold'>
                            <div className='z-10'>
                                <p>{skill.number}</p>
                                <p className='text-3xl mt-2'>{skill.title}</p>
                            </div>
                            {/* color box border */}
                            <div className={`w-1/2 md:w-3/4 h-36 border border-${skill.color} absolute right-0 top-0 z-[-1]`}></div>
                        </div>
                        <p className='mt-1'>
                            {skill.list}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default MySkills