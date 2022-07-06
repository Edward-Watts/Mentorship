import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './navigation.css';


const Navigation = () => {
    const navigate = useNavigate();

    // const registerMentorHandler = () => {
    //     navigate('/register-mentor')
    // }

    const registerMentorSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required.'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Last name is required.'),
        expertise: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Expertise is required.'),
        email: Yup.string().email('Invalid email').required('Email is required.'),
        password: Yup.string()
            .required('Password is required.') 
            .min(8, 'Password is too short - at least 8 characters.'),
        confirmPassword: Yup.string()
            .required('Password confirmation is required.') 
            .min(8, 'Password is too short - at least 8 characters.')
    });

    const registerMentorHandler = (values) => {
        console.log(values)
        navigate('/signin')
    }
 
    return(
        <div className='navContainer'>
                <nav className="navbar navbar-expand-lg bg-white p-2">
                    <div className="container">
                        <a className="navbar-brand me-5" href="/"><h5>Mentorship</h5></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* <li className="nav-item">
                                    <a className="nav-link me-5" aria-current="page" href="#">About</a>
                                </li> */}
                                {/* <li className="nav-item">
                                    <a className="nav-link" href="#">What we do</a>
                                </li> */}
                            </ul>
                            <form className="d-flex" style={{width: "100%"}} role="search">
                                <input className="form-control me-2" type="search" placeholder="Search for mentor" aria-label="Search" />
                                <button className="btn btn-dark px-4" type="submit">Search</button>
                            </form>
                            <div className="bmbtn ms-0 ms-lg-2 mt-2 mt-lg-0">
                                <button type="button" className="btn btn-outline-danger" style={{width: "100%"}} data-bs-toggle="modal" data-bs-target="#experienceModal">Become a mentor</button>
                            </div>
                            <div className="modal fade" id="experienceModal" tabIndex="-1" aria-labelledby="experienceModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                                <div className="modal-content">
                                <div className="modal-header bg-dark">
                                    <h1 className="modal-title text-white" id="experienceModalLabel">Mentorship</h1>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <Formik
                                        initialValues={{
                                        firstName: '',
                                        lastName: '',
                                        skills: '',
                                        email: '',
                                        password: '',
                                        confirmPassword: ''
                                        }}
                                        validationSchema={registerMentorSchema}
                                        onSubmit={values => registerMentorHandler(values)}>
                                        {({ errors, touched }) => (
                                            <div className="formWrapper d-flex align-items-center text-dark">
                                                {/* <div className="text mt-4">
                                                    <h1>Mentorship</h1> 
                                                </div> */}
                                                <div className="m-3"><h5>Register as a Mentor</h5></div>
                                                <Form className="form">
                                                    {/* {show ? 
                                                    <div className="">
                                                        <p>Incorrect email or password.</p>
                                                    </div> : null} */}
                                                    <label id="firstName" htmlFor="firstname">First name</label>
                                                    <Field name="firstName" type="text" className="input" />
                                                    {errors.firstName && touched.firstName ? <small className="error">{errors.firstName}</small> : null}

                                                    <label id="lastName" htmlFor="lastname">Last name</label>
                                                    <Field name="lastName" type="text" className="input" />
                                                    {errors.lastName && touched.lastName ? <small className="error">{errors.lastName}</small> : null}

                                                    <label id="skills" htmlFor="skills">Skills</label>
                                                    <Field name="skills" type="text" className="input" placeholder="Eg: PHP, JavaScript, ..." />
                                                    {errors.skills && touched.skills ? <small className="error">{errors.skills}</small> : null}

                                                    <label id="email" htmlFor="email">Email</label>
                                                    <Field name="email" type="email" className="input" />
                                                    {errors.email && touched.email ? <small className="error">{errors.email}</small> : null}

                                                    <label id="password" htmlFor="password">Password</label>
                                                    <Field name="password" type="password" className="input" />
                                                    {errors.password && touched.password ? (<small className="error">{errors.password}</small>) : null}

                                                    <label id="confirmPassword" htmlFor="confirmpassword">Confirm password</label>
                                                    <Field name="confirmPassword" type="password" className="input" />
                                                    {errors.confirmPassword && touched.confirmPassword ? (<small className="error">{errors.confirmPassword}</small>) : null}

                                                    <button className="btn btn-dark mt-4" variant="primary" type="submit" data-bs-dismiss="modal"> Register </button>
                                                </Form>
                                            </div>
                                        )}
                                    </Formik>
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <div className="m-3">
                                        Already have an account? <a className="signLink" href="/signin">Sign in</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </nav>
        </div>
    )
}

export default Navigation;