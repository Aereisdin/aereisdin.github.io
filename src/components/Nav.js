import React from "react";
import { Link } from "react-router-dom";

function Nav() {

return(
    <>
        <div className="title text-center"><a href="/">Kiel Sprague</a></div>
        <nav>
            <div className="top-bar" id="nav-menu">
                <div className="top-bar-left">
                    <ul className="vertical medium-horizontal align-spaced menu">
                        <li><Link to="/whoami"><span className="nav-buttons" id="who">Who am I?</span></Link></li>
                        <li><Link to="/projects"><span className="nav-buttons" id="projects">Projects</span></Link></li>
                        <li><Link to="/goals"><span className="nav-buttons" id="goals">Goals</span></Link></li>
                        {/* <li><a href="contact"><span className="nav-buttons" id="contact">Reach Out</span></a></li> */}
                    </ul>
                </div>
            </div>  
        </nav>
    </>
);
}

export default Nav;