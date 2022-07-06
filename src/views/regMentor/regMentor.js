import React from "react";
import {useNavigate} from 'react-router-dom'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import './regMentor.css'


const RegMentor = () => {
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
        country: Yup.string()
            .required('country is required.'),
        experience: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Last name is required.'),
        education: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required.'),
        SKills: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required.'),
        accomplishments: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required.'),
        website: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required.'),
        phone: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('First name is required.'),
    });

    const navigate = useNavigate();
    const registerHandle = () => {
        navigate('/@:id/dashboard')
    }

    return (
        <div className="">
            <div className="card shadow border-0 m-5 p-4">
                <Formik
                    initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    country: '',
                    experience: ''
                    }}
                    validationSchema={registerSchema}
                    onSubmit={values=> console.log(values)}>
                    {({ errors, touched }) => (
                        <div className="formWrapper d-flex">
                            <div className="text">
                                <h5>Some short example text here</h5> 
                            </div>
                            <div className=""><p>Some quick example text to build on the card name and make up the bulk of the card's content.</p></div>
                            <Form className="w-100 d-grid">
                                {/* {show ? 
                                <div className="">
                                    <p>Incorrect email or password.</p>
                                </div> : null} */}
                                <div className='row'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='d-grid'>
                                            <label id="firstName" htmlFor="firstname">First name</label>
                                            <Field name="firstName" type="text" className="input" />
                                            {errors.firstName && touched.firstName ? <small className="error">{errors.firstName}</small> : null}
                                        </div>
                                        <div className='d-grid'>
                                            <label id="lastName" htmlFor="lastname">Last name</label>
                                            <Field name="lastName" type="text" className="input" />
                                            {errors.lastName && touched.lastName ? <small className="error">{errors.lastName}</small> : null}
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div className='d-grid'>
                                            <label id="email" htmlFor="email">Email</label>
                                            <Field name="email" type="email" className="input" />
                                            {errors.email && touched.email ? <small className="error">{errors.email}</small> : null}
                                        </div>
                                        <div className='d-grid'>
                                            <label id="country" htmlFor="country">Country</label>
                                            <Field as="select" name="country" className="input">
                                                <option value="">Select country</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="none">None</option>
                                            </Field>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className='row'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='d-grid'>
                                            <label id="experience" htmlFor="confirmpassword">Experience</label>
                                            <div className='d-grid border p-2'>
                                                <Field name="experience" type="text" className="input" placeholder="Organisation name"/>
                                                {errors.experience && touched.experience ? (<small className="error">{errors.experience}</small>) : null}
                                                
                                                <Field name="experience" type="text" className="input mt-2" placeholder="Position"/>
                                                {errors.experience && touched.experience ? (<small className="error">{errors.experience}</small>) : null}
                                                
                                                <div className='d-flex justify-content-center'>
                                                    <div className='m-2'>
                                                        <label id="experience" htmlFor="confirmpassword">Start Date</label>
                                                        <Field name="startDate" type="date" className="input" />
                                                        {errors.startDate && touched.startDate ? <small className="error">{errors.startDate}</small> : null}
                                                    </div>
                                                    <div className='m-2'>
                                                        <label id="experience" htmlFor="confirmpassword">End Date</label>
                                                        <Field name="endDate" type="date" className="input" />
                                                        {errors.endDate && touched.endDate ? <small className="error">{errors.endDate}</small> : null}
                                                    </div>
                                                </div>
                                            </div>
                                            <small className='text-primary'>Add experience</small>
                                        </div>
                                        <hr/>
                                        <div className='d-grid'>
                                            <label id="confirmPassword" htmlFor="confirmpassword">Skills</label>
                                            <div className='d-grid'>
                                                <Field name="confirmPassword" type="password" className="input" placeholder="Eg. JavaScript" />
                                                {errors.confirmPassword && touched.confirmPassword ? (<small className="error">{errors.confirmPassword}</small>) : null}
                                            </div>
                                            <small className='text-primary'>Add skills</small>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div className='d-grid'>
                                            <label id="confirmPassword" htmlFor="confirmpassword">Education</label>
                                            <div className='d-grid border p-2'>
                                                <Field name="confirmPassword" type="password" className="input" placeholder="Institution" />
                                                {errors.confirmPassword && touched.confirmPassword ? (<small className="error">{errors.confirmPassword}</small>) : null}

                                                <Field name="experience" type="text" className="input mt-2" placeholder="Eg. BSc in Computer Science"/>
                                                {errors.experience && touched.experience ? (<small className="error">{errors.experience}</small>) : null}
                                            
                                                <div className='d-flex justify-content-center'>
                                                    <div className='m-2'>
                                                        <label id="experience" htmlFor="confirmpassword">Start Date</label>
                                                            <Field name="startDate" type="date" className="input" />
                                                            {errors.startDate && touched.startDate ? <small className="error">{errors.startDate}</small> : null}
                                                    </div>
                                                    <div className='m-2'>
                                                        <label id="experience" htmlFor="confirmpassword">End Date</label>
                                                        <Field name="endDate" type="date" className="input" />
                                                        {errors.endDate && touched.endDate ? <small className="error">{errors.endDate}</small> : null}
                                                    </div>
                                                </div>
                                            </div>
                                            <small className='text-primary'>Add Education</small>
                                        </div>
                                        <hr/>
                                        <div className='d-grid'>
                                            <label id="confirmPassword" htmlFor="confirmpassword">Accomplishments</label>
                                            <div className='d-grid'>
                                                <Field name="confirmPassword" type="password" className="input" />
                                                {errors.confirmPassword && touched.confirmPassword ? (<small className="error">{errors.confirmPassword}</small>) : null}
                                            </div>
                                            <small className='text-primary'>Add accomplishments</small>
                                        </div>
                                        <hr />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-lg-6'>
                                        <div className='d-grid'>
                                            <label id="confirmPassword" htmlFor="confirmpassword">Website</label>
                                            <Field name="confirmPassword" type="password" className="input" />
                                            {errors.confirmPassword && touched.confirmPassword ? (<small className="error">{errors.confirmPassword}</small>) : null}
                                        </div>
                                    </div>
                                    <div className='col-12 col-lg-6'>
                                        <div className='d-grid'>
                                            <label id="confirmPassword" htmlFor="confirmpassword">Phone Number</label>
                                            <Field name="confirmPassword" type="password" className="input" />
                                            {errors.confirmPassword && touched.confirmPassword ? (<small className="error">{errors.confirmPassword}</small>) : null}
                                        </div>
                                    </div>
                                </div>
                                <button className="btn btn-dark mt-4 mb-5" variant="primary" type="submit" data-bs-dismiss="modal" onClick={registerHandle}> Register </button>
                            </Form>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default  RegMentor;