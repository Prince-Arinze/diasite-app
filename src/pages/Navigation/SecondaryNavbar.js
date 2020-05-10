import React from "react";
import { NavLink } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa"
import "./SecondaryNav.css";
const SecondaryNavbar = (props) => {
    return (
        <div className="secondary-navbar">
            <ul className="navbar-lists-1">
                <li className="nav-items-left" style={{ flex: "1 1 47%", alignSelf: "center"}}><NavLink to="#">All Collections &nbsp;<FaCaretDown /> </NavLink><NavLink to="/about">About Us</NavLink><NavLink to="/news">News & Updates</NavLink ><NavLink to="/faq">FAQ</NavLink><NavLink to="/contact">Contact Us</NavLink></li>

                <li className="nav-items-right" style={{flex: "1 1 50%", alignSelf: "center"}}><NavLink to="/genealogy">Genealogy</NavLink><NavLink to="/research">Academic Research</NavLink><NavLink to="/resources">Digital Resources</NavLink ><NavLink to="/education">Education</NavLink><NavLink to="/media">Media</NavLink><NavLink to="/donate">Donate/Community</NavLink></li>
            </ul>
        </div>
    )
}


export default SecondaryNavbar