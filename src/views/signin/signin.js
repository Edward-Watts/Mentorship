import React, {useState} from "react";

import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './signin.css';


const Signin = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    

    const signInSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string()
            .required('Password is required.') 
            .min(8, 'Password is too short - at least 8 characters.')
    });

    const signInHandler = (values) => {
        console.log(values)
        navigate('/')
    }

    return(
        <div className="bg-white">
            <Formik
                initialValues={{
                email: '',
                password: ''
                }}
                validationSchema={signInSchema}
                onSubmit={values => signInHandler(values)}>
                {({ errors, touched }) => (
                    <div className="signinFormWrapper d-flex justify-content-center align-items-center text-dark">
                        <div className="text mt-4">
                            <h1>Mentorship</h1> 
                        </div>
                        <div className=""><h5>Sign in</h5></div>
                        <Form className="form">
                            {show ? 
                            <div className="">
                                <p>Incorrect email or password.</p>
                            </div> : null}
                            <label id="email" htmlFor="email">Email</label>
                            <Field name="email" type="email" className="input" />
                            {errors.email && touched.email ? <small className="error">{errors.email}</small> : null}

                            <label id="password" htmlFor="password">Password</label>
                            <Field name="password" type="password" className="input" />
                            {errors.password && touched.password ? (<small className="error">{errors.password}</small>) : null}
                            <button className="btn btn-dark mt-4" variant="primary" type="submit"> Sign in </button>
                        </Form>
                        <div className="m-4">
                            New here? <a className="signLink" href="register">Create an account</a>
                        </div>
                    </div>
                )}
            </Formik>
        </div>
    )
}


export default Signin;