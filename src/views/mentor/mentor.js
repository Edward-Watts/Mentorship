import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";


const Mentor = () => {
    const [loading, setLoading] = useState(true)
    const [names, setNames] = useState([])

    const params = useParams();

    useEffect(() => {
        console.log('useEffect....., loading mentors')
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [params])

    useEffect(() => {
        setNames([params])
    }, [params])

    return (
        <div className="">
            {loading ? 
            <div className="card shadow border-0 my-5 mx-4 text-center d-flex justify-content-center align-items-center" style={{height: "55vh"}}>
                 <div className="spinner-border text-dark m-5 p-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>: 
            <div>
                <div className="card shadow border-0 mt-5 mx-4" style={{height: "30rem"}} >
                    <img src={require('../../assets/card.jpg')} className="card-img-right mx-4 mb-4" style={{width: "20rem", height: "12rem", marginTop: "-30px"}} alt="..." />
                    <div className="card-body text-start mx-4">
                        {names.map(name => (
                            <div key={name.id}>
                                <h5 className="card-title">{name.id}</h5>
                            </div>
                        ))}
                        <div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center m-4">
                        <button className="btn btn-dark px-4 m-1">Apply</button>
                        <button className="btn btn-outline-dark px-4 m-1">Message</button>
                    </div>
                </div>
                <div className="card shadow border-0 my-4 mx-4" style={{height: "20rem"}} >
                    <div className="card-body text-start m-4">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Mentor;