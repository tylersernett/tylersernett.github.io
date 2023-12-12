import LineGradient from "../components/LineGradient"
// import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import ContactForm from "../components/ContactForm"

const Contact = () => {
    return (
        <section id="contact" className="py-24">
            {/* HEADINGS */}
            <motion.div
                className="flex justify-start w-full"
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
                <div>
                    <h2 className='font-playfair font-semibold text-4xl mb-5'>
                        <span className='text-yellow'>CONTACT ME</span>
                    </h2>
                    <div className="flex md:justify-start my-5">
                        <LineGradient width="w-2/4" />
                    </div>
                </div>
            </motion.div>

            {/* FORM */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    className="basis-1/2 mt-10 md:mt-0"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <ContactForm />
                </motion.div>
                
                <motion.div
                    className="basis-1/2 flex justify-center"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    {/* <div //add blue offset frame
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:left-10
                            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                    > */}
                    <img
                        className="z-10 hidden md:block object-cover max-h-[382px]"
                        // className="bg-gradient-rainblue py-0.5 px-0.5"
                        src="../assets/contact.png" alt='contact' />
                    {/* </div> */}
                </motion.div>
            </div>
        </section>
    )
}

export default Contact