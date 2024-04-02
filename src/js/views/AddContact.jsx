import React from 'react'
import { Link } from "react-router-dom";

export const AddContact = () => {
    return (
        <div>
            <h1>Add New contact</h1>
            <form>
                <div className="mb-3">
                    <label for="FullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="FullName" aria-describedby=""></input>
                </div>
                <div className="mb-3">
                    <label for="Email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="Email" aria-describedby=""></input>
                </div>
                <div className="mb-3">
                    <label for="Phone" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="Phone" aria-describedby=""></input>   
                </div>
                <div className="mb-3">
                    <label for="Address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="Address" aria-describedby=""></input>
                </div>
                <button type="submit" className="btn btn-primary">Create Contact</button>
            </form>
            <Link to={"/"}>back to contact list</Link>
        </div>
    )
}
