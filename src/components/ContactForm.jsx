import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const [isSent, setIsSent] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string().required('required'),
        email: Yup.string().email('invalid email').required('required'),
        message: Yup.string().required('required')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            fetch('https://formsubmit.co/ajax/7793f1e72a9025f1888edee332bccdef', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(values),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    //successful response:
                    formik.resetForm();
                    setIsSent(true)
                    //return response.text();
                })
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error('There was a problem with the form submission:', error);
                });
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Name {formik.touched.name && formik.errors.name ? (
                        <span className='text-red'>{formik.errors.name}</span>
                    ) : null}
                    <input
                        type="text"
                        name="name"
                        className="w-full bg-blue font-semibold p-3 mb-5 text-deep-blue"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                </label>

                <label>
                    Email {formik.touched.email && formik.errors.email ? (
                        <span className='text-red'>{formik.errors.email}</span>
                    ) : null}
                    <input
                        type="email"
                        name="email"
                        className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mb-5 text-deep-blue"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                </label>

                <label>
                    Message {formik.touched.message && formik.errors.message ? (
                        <span className='text-red'>{formik.errors.message}</span>
                    ) : null}
                    <textarea
                        name="message"
                        className="w-full bg-blue font-semibold p-3 text-deep-blue"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                </label>

                <button
                    type='submit'
                    variant='contained'
                    disabled={formik.isSubmitting}
                    className="w-full sm:w-auto sm:min-w-[205px] p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red
                        hover:text-white transition duration-500 disabled:bg-gray-500 disabled:cursor-wait disabled:text-white"
                >
                    {formik.isSubmitting ? " SENDING..." : "SEND ME A MESSAGE"}
                </button>
            </form>

            {/* display the following confirmation once server response is received & isSent is true */}
            {isSent && (
                <p className='mt-2'>
                    Your message has been sent!
                </p>
            )}
        </div>
    );
};

export default ContactForm;