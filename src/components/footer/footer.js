import React from "react";


const Footer = () => {
    return (
        <div className="py-5 bg-dark text-white">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <h1>Mentorship</h1>
                    </div>
                    <div className="col text-start">
                        <div><small>&copy; 2022 Mentorship</small></div>
                        <div><small>102 Star Clinic, Accra - Ghana</small></div>
                        <div><small>+233 00 111 2222 | info@domain.com</small></div>
                    </div>
                    <div className="col"><div><a className="nav-link" href="#">Privacy Policy</a> <a className="nav-link" href="#">Terms Of Service</a></div></div>
                </div>
            </div>
        </div>
    )
}

export default Footer;