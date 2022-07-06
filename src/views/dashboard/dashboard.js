import React from "react";
import { useSelector } from "react-redux";

import "./dashboard.css";


const Dashboard = () => {

    let mentor = useSelector((state) => state.mentors.mentors);
    console.log(mentor);


    const mentors = [
        {  
        id: 1,
        name: 'Ayaan',  
        status: "approved"  
        },{  
        id: 2,
        name: 'Ahana',  
        status: "approved"  
        },{  
        id: 3,
        name: 'Peter',  
        status: "pending"   
        },{  
        id: 4,
        name: 'Virat',  
        status: "approved"  
        },{  
        id: 5,
        name: 'Rohit',  
        status: "approved"
        },{  
        id: 6,
        name: 'Dhoni',  
        status: "pending"
        },
        {  
        id: 7,
        name: 'Ayaan',  
        status: "approved"  
        },{  
        id: 8,
        name: 'Ahana',  
        status: "approved"  
        },{  
        id: 9,
        name: 'Peter',  
        status: "pending"   
        },{  
        id: 10,
        name: 'Virat',  
        status: "approved"  
        },{  
        id: 11,
        name: 'Rohit',  
        status: "approved"
        },{  
        id: 12,
        name: 'Dhoni',  
        status: "pending"
        }
    ]

    const renderMentor = (mentor) => {
        let action = "approve"
        let textColor = "text-primary"
        let btnColor = "btn btn-outline-success px-3"
        if(mentor.status === "approved") {
            action = "terminate"
            textColor = "text-success"
            btnColor = "btn btn-outline-danger"
        }
        return (
            <tr key={mentor.id} className="align-middle">
                <th scope="row">{mentor.id}</th>
                <td>{mentor.name}</td>
                <td className={textColor}>{mentor.status}</td>
                <td><i className="bi bi-chat-left-fill text-secondary" width="32" height="32"></i></td>
                <td  style={{cursor: "pointer"}}><button className={btnColor}>{action}</button></td>
            </tr>
        )
    } 

    const goToSettings = () => {
        console.log("settings clicked")
    }

    return (
        <div className="d-block d-xl-flex justify-content-center">
            <div className="d-flex justify-content-center align-items-center d-xl-none">
                <div className="card d-flex flex-wrap border-0 m-4" style={{height:"55px", width:"95%"}}>
                    <div className="py-3 icon w-25"><i className="bi bi-person-fill text-secondary" width="32" height="32"></i></div>
                    <div className="py-3 icon w-25"><i className="bi bi-chat-left-fill text-secondary" width="32" height="32"></i></div> 
                    <div className="py-3 icon w-25"><i className="bi bi-check-square-fill text-secondary" width="32" height="32"></i></div>
                    <div className="py-3 icon w-25" onClick={goToSettings}><i className="bi bi-gear-fill text-secondary" width="32" height="32"></i></div>
                </div>
            </div>
            <div className="" style={{maxWidth: "95%"}}>
                <div className="d-flex justify-content-center align-items-center p-2 text-white">
                    <div className="card shadow border-0 m-3 bg-info" style={{width: "20rem"}}>
                        <div className="card-body">
                            <small className="card-title">Total Number of Mentee</small>
                            <h1 className="card-text">20</h1>
                            <small>some text here</small>
                        </div>
                    </div>
                    <div className="card shadow border-0 m-3 bg-primary" style={{width: "20rem"}}>
                        <div className="card-body">
                            <small className="card-title">Meet Ups</small>
                            <h1 className="card-text">8</h1>
                            <small>some text here</small>
                        </div>
                    </div>
                    <div className="card shadow border-0 m-3 bg-success" style={{width: "20rem"}}>
                        <div className="card-body">
                            <small className="card-title">Ratings</small>
                            <h1 className="card-text">20</h1>
                            <small>some text here</small>
                        </div>
                    </div>
                </div>
                <div className="mt-1 mb-4 ms-4 bg-white" style={{height:"auto"}}>
                    <table className="table table-responsive table-hover">
                        <thead className="bg-dark text-white">
                            <tr className="">
                                <th className="p-3">#</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Status</th>
                                <th className="p-3">Message</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mentors.map(renderMentor)}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="d-none d-xl-block" style={{maxWidth: "5%"}}>
                <div className="card border-0 m-4 h-auto" style={{width:"50px"}}>
                    <div className="py-4 icon"><i className="bi bi-person-fill text-secondary" width="32" height="32"></i></div>
                    <div className="py-4 icon"><i className="bi bi-chat-left-fill text-secondary" width="32" height="32"></i></div> 
                    <div className="py-4 icon"><i className="bi bi-check-square-fill text-secondary" width="32" height="32"></i></div>
                    <div className="py-4 icon" onClick={goToSettings}><i className="bi bi-gear-fill text-secondary" width="32" height="32"></i></div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard;