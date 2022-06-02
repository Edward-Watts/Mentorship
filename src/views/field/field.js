import React, {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";



const Field = () => {
    const [loading, setLoading] = useState(true)
    const [mentors, setMentors] = useState([
        {
            id: 1,
            name: 'Agyenim Boateng',
            username:'AB-4515',
            image: '',
            rating: 4,
            description: "Some quick example text to build on the card name and make up the bulk of the card's content."
        },
        {
            id: 2,
            name: 'Benjamin Kissi',
            username:'BK-9687',
            image: '',
            rating: 5,
            description: "Some quick example text to build on the card name and make up the bulk of the card's content."
        },
        {
            id: 3,
            name: 'Edward Watts',
            username:'EW-5548',
            image: '',
            rating: 3,
            description: "Some quick example text to build on the card name and make up the bulk of the card's content."
        },
        {
            id: 4,
            name: 'Edem Kutami',
            username:'EK-4887',
            image: '',
            rating: 4,
            description: "Some quick example text to build on the card name and make up the bulk of the card's content."
        },
        {
            id: 5,
            name: 'Josh Smith',
            username:'JS-2545',
            image: '',
            rating: 4,
            description: "Some quick example text to build on the card name and make up the bulk of the card's content."
        },
        {
            id: 6,
            name: 'Mark Zurkeberg',
            username:'MZ-4769',
            image: '',
            rating: 5,
            description: "Some quick example text to build on the card name and make up the bulk of the card's content."
        }
    ])

    const [titles, setTitles] = useState([])

    const params = useParams();

    useEffect(() => {
        console.log('useEffect....., loading mentors')
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [params])

    useEffect(() => {
        console.log('useEffect....., params')
        setTitles([params])
        console.log(titles)
    }, [params])

    const navigate = useNavigate();

    const goToMentor = (mentor) => {
        navigate(`/mentor/@${mentor.username}`)
    }

    return (
        <div className="">
            <div className="bg-dark text-white p-5">
                <div className="container text-start">
                    {titles.map(title => (
                        <div key={title.id} className="">
                            <h3>{title.id}</h3>
                        </div>
                    ))}
                    <div>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center bg-white py-3">
                {loading ? 
                <div className="spinner-border text-dark p-5" style={{margin: "10rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                mentors.map(mentor => (
                    <div className="card shadow border-0 m-3" style={{width: "20rem", cursor: 'pointer'}} onClick={()=> goToMentor(mentor)} key={mentor.id}>
                        <img src={require('../../assets/card.jpg')} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{mentor.name}</h5>
                            <p className="card-text">{mentor.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Field;