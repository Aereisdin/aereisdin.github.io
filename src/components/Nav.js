import React from "react";

function Nav() {

return(
    <>
        <div className="title text-center"><a href="/">Kiel Sprague</a></div>
        <nav>
            <div className="top-bar" id="nav-menu">
                <div className="top-bar-left">
                    <ul className="vertical medium-horizontal align-spaced menu">
                        <li><a href="whoami"><span className="nav-buttons" id="who">Who am I?</span></a></li>
                        <li><a href="projects"><span className="nav-buttons" id="projects">Projects</span></a></li>
                        <li><a href="goals"><span className="nav-buttons" id="goals">Goals</span></a></li>
                        {/* <li><a href="contact"><span className="nav-buttons" id="contact">Reach Out</span></a></li> */}
                    </ul>
                </div>
            </div>  
        </nav>
    </>
);
}

export default Nav;