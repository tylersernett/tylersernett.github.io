import LineGradient from "../components/LineGradient"
import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import ContactForm from "../components/ContactForm"

const Contact = () => {
    // const { register, trigger, handleSubmit, formState: { errors } } = useForm();

    // const onSubmit = async (e) => {
    //     const isValid = await trigger();
    //     if (!isValid) {
    //         e.preventDefault();
    //     }
    // }

    // const onSubmit = (data) => {
    //     console.log(data);
    // };

    // const {
    //     register,
    //     trigger,
    //     formState: { errors }
    // } = useForm();

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
                    {/* <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/e5dcdfe6629c8f6fabb6c8d18fcf023f"
                        method="POST">

                        <label htmlFor="name">Name</label>
                        <input className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mb-5 text-deep-blue"
                            type="text"
                            // placeholder="NAME"
                            // for react hook form:
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === 'required' && 'This field is required.'}
                                {errors.name.type === 'maxLength' && 'Max length is 100 characters.'}
                            </p>
                        )}

                        <label htmlFor="email">Email</label>

                        <input className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mb-5 text-deep-blue"
                            type="text"
                            // placeholder="EMAIL"
                            // for react hook form:
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />

                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.name.type === 'required' && 'This field is required.'}
                                {errors.name.type === 'pattern' && 'Invalid email address.'}
                            </p>
                        )}

                        <label htmlFor="message">Message</label>
                        <textarea className="w-full bg-blue font-semibold placeholder-opaque-black p-3 text-deep-blue"
                            type="text"
                            // placeholder="MESSAGE"
                            rows='4'
                            cols='50'
                            // for react hook form:
                            {...register("message", {
                                required: true,
                                maxLength: 2000
                            })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.name.type === 'required' && 'This field is required.'}
                                {errors.name.type === 'maxLength' && 'Max length is 2000 characters.'}
                            </p>
                        )}

                        <button type="submit"
                            className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red
                        hover:text-white transition duration-500">
                            SEND ME A MESSAGE
                        </button>
                    </form> */}

                    {/* <form 
                    onSubmit={onSubmit}
                        // onSubmit={handleSubmit(onSubmit)}
                        action="https://formsubmit.co/e5dcdfe6629c8f6fabb6c8d18fcf023f"
                        method="POST"
                    >
                        <label>
                            Name:
                            <input
                                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 text-deep-blue"
                                type="text" name="name" {...register("name", {
                                    required: true,
                                    maxLength: 100,
                                })} />
                            {errors.name && <span className="text-red">This field is required</span>}
                        </label>

                        <label>
                            Email:
                            <input
                                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 text-deep-blue"
                                type="email"
                                name="email"
                                {...register("email", {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                })}
                            />
                            {errors.email && <span className="text-red">Please enter a valid email address</span>}
                        </label>

                        <label>
                            Message:
                            <textarea name="message" {...register("message", {
                                required: true,
                                maxLength: 2000
                            })}
                                className="w-full bg-blue font-semibold placeholder-opaque-black p-3 text-deep-blue" />
                            {errors.message && <span className="text-red">This field is required</span>}
                        </label>

                        <button type="submit"
                            className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red
                        hover:text-white transition duration-500">
                            SEND ME A MESSAGE
                        </button>
                    </form> */}
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
                            className="z-10 hidden md:block"
                            // className="bg-gradient-rainblue py-0.5 px-0.5"
                            style={{ objectFit: 'cover' }} src="../assets/contact.png" alt='contact' />
                        {/* </div> */}
                </motion.div>
            </div>
        </section>
    )
}

export default Contact