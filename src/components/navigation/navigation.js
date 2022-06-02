import React from 'react';

import './navigation.css';


const Navigation = () => {
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
                                <button type="button" className="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#exampleModal"  style={{width: "100%"}}>Become a mentor</button>
                            </div>
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Register as mentor</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                        <div className="mb-3">
                                            <label for="recipient-name" className="col-form-label">Recipient:</label>
                                            <input type="text" className="form-control" id="recipient-name" />
                                        </div>
                                        <div className="mb-3">
                                            <label for="message-text" className="col-form-label">Message:</label>
                                            <textarea className="form-control" id="message-text"></textarea>
                                        </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-dark">Submit</button>
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