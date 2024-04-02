import React, { useState, useEffect, useContext } from "react";

import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";


export const ContactCard = () => {
    const { store } = useContext(Context);
    return (
        <div>
            <div className="container d-flex flex-column">
                <div className="boton"> <Link to={"/add-contact"}><button type="button" className="btn btn-success" >Add new Contact</button> </Link> </div>
                <div className="">

                    <div>
                        <div>
                            <ul>
                                {store.contacts.map((item) => {
                                    return (
                                        <div>
                                            <li className="d-flex justify-content-between" key={item.id}>
                                                <div className="d-flex">
                                                    <div>
                                                        <img src={rigoImage}></img>
                                                    </div>
                                                    <div>
                                                        <p>Name: {item.name}</p>
                                                        <p>Phone: {item.phone}</p>
                                                        <p>Email: {item.email}</p>
                                                        <p>Address: {item.address}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between">

                                                    <div>botones</div>

                                                </div>
                                            </li>
                                        </div>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

