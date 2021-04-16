import React from "react";
import profilePicture from "../../images/richard.jpg"
import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="main-content">
            <header>
                <h2>
                    <label htmlFor="nav-toggle">
                        <span className="las la-bars"></span>
                    </label>
                    Dashboard
                </h2>
                <div className="search-wrapper">
                    <span className="las la-search"></span>
                    <input type="search" placeholder="Search here"/>
                </div>
                <div className="user-wrapper">
                    <img src={profilePicture} width="40px" height="40px" alt=""/>
                    <div>
                        <h4> Richard W</h4>
                        <small> Super admin</small>
                    </div>
                </div>
            </header>
        </div>

    )
}
export default Navbar;