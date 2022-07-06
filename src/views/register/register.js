import React, {useState} from "react";

import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const Register = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();


    

    const registerSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required.'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Last name is required.'),
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string()
            .required('Password is required.') 
            .min(8, 'Password is too short - at least 8 characters.'),
        confirmPassword: Yup.string()
            .required('Password confirmation is required.') 
            .min(8, 'Password is too short - at least 8 characters.')
    });

    const registerHandler = (values) => {
        console.log(values)
        navigate('/signin')
    }

    return(
        <div className="bg-white">
            <Formik
                initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
                }}
                validationSchema={registerSchema}
                onSubmit={values => registerHandler(values)}>
                {({ errors, touched }) => (
                    <div className="formWrapper d-flex justify-content-center align-items-center text-dark">
                        <div className="text mt-4">
                            <h1>Mentorship</h1> 
                        </div>
                        <div className=""><h5>Register as a Mentee</h5></div>
                        <Form className="form">
                            {show ? 
                            <div className="">
                                <p>Incorrect email or password.</p>
                            </div> : null}
                            <label id="firstName" htmlFor="firstname">First name</label>
                            <Field name="firstName" type="text" className="input" />
                            {errors.firstName && touched.firstName ? <small className="error">{errors.firstName}</small> : null}

                            <label id="lastName" htmlFor="lastname">Last name</label>
                            <Field name="lastName" type="text" className="input" />
                            {errors.lastName && touched.lastName ? <small className="error">{errors.lastName}</small> : null}

                            <label id="email" htmlFor="email">Email</label>
                            <Field name="email" type="email" className="input" />
                            {errors.email && touched.email ? <small className="error">{errors.email}</small> : null}

                            <label id="password" htmlFor="password">Password</label>
                            <Field name="password" type="password" className="input" />
                            {errors.password && touched.password ? (<small className="error">{errors.password}</small>) : null}

                            <label id="confirmPassword" htmlFor="confirmpassword">Confirm password</label>
                            <Field name="confirmPassword" type="password" className="input" />
                            {errors.confirmPassword && touched.confirmPassword ? (<small className="error">{errors.confirmPassword}</small>) : null}

                            <button className="btn btn-dark mt-4" variant="primary" type="submit"> Register </button>
                        </Form>
                        <div className="m-4">
                            Already have an account? <a className="signLink" href="signin">Sign in</a>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}


export default Register;