import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import './home.css';

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [fields, setFields] = useState([
        {
            id: 1,
            title: 'Backend Development',
            image: '',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 2,
            title: 'Frontend Engineering',
            image: '',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 3,
            title: 'UX Engineer',
            image: '',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 4,
            title: 'Data Management',
            image: '',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 5,
            title: 'Machine Learning',
            image: '',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id: 6,
            title: 'UI Designing',
            image: '',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
    ])

    useEffect(() => {
        setTimeout(() => {
            console.log('useEffect....., loading fields')
            setLoading(false)
        }, 1000)
    }, [])

    const navigate = useNavigate();

    const goToSignin = () => {
        navigate('/signin')
    }

    const goToRegister = () => {
        navigate('/register')
    }
    
    const goToField = (field) => {
        navigate(`/field/${field.title}`)
    }

    return (
        <div>
            <div className="pt-4 imageContainer bg-white">
                <div className="container pt-3 d-block d-sm- bg-white">
                    <div className="">
                        <h1>
                            Mentorship is a free service that creates access to quality mentoring opportunities and 
                            relationships across the world. 
                            <span className="mx-2" style={{color: "#ce5053"}}>Get Started!</span>                     
                        </h1>
                    </div>
                    <div className="py-2 d-flex justify-content-center align-items-center">
                        <div>
                            <button className="m-1 btn btn-dark px-4" onClick={goToSignin}>Sign in</button>
                        </div>
                        <div className="mx-1">or</div>
                        <div>
                            <button className="m-1 btn btn-outline-dark px-4" onClick={goToRegister}>Create account</button>
                        </div>
                    </div>
                </div>
                <img src={require('../../assets/mentor.jpg')} className="pt-2 image" alt="Mentor"/>
            </div>
            <div className="text-white bg-dark p-4">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-12 col-md-6 p-4">
                            <h3>Who we are</h3>
                            <p>
                                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum
                                lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
                                lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
                            </p>
                        </div>
                        <div className="col-12 col-md-6 p-4">
                            <h3>What we do</h3>
                            <p>
                                lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum
                                lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
                                lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-4">
                <div className="p-4">
                    <h1>Find a mentor in your field of interest</h1>
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center">
                {loading ? 
                <div className="spinner-border text-dark m-5 p-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                fields.map(field => (
                    <div className="card shadow border-0 m-3" style={{width: "20rem", cursor: 'pointer'}} onClick={()=> goToField(field)} key={field.id}>
                        <img src={require('../../assets/card.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{field.title}</h5>
                            <p className="card-text">{field.description}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Home;

