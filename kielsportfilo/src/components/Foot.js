import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faLinkedin, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

function Foot() {
const mobile = <FontAwesomeIcon icon={faMobileAlt} />
const envelope = <FontAwesomeIcon icon={faEnvelope} />
const Map = <FontAwesomeIcon icon={faMapMarkerAlt} />
const Fb = <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
const LkIn = <FontAwesomeIcon icon={faLinkedin} size="3x" />
const Twitter = <FontAwesomeIcon icon={faTwitterSquare} size="3x" />

return(
    <footer className="grid-x align-spaced">
        <div className="cell medium-3 footKiel"><p>Contact Kiel</p><p>{mobile} +1-530-394-4641</p><p>{envelope} <a href="mailto:aereisdin@gmail.com?subject=Portfolio-Message&body=Mr.Sprague,">aereisdin@gmail.com</a></p><p>{Map} Quincy, California, U.S.A.</p></div>
        <div className="cell medium-2 text-center"><p>Follow Kiel</p><p><a href="https://www.facebook.com/Aereisdin">{Fb}</a><a href="https://www.twitter.com/Aereisdin"> {Twitter}</a><a href="https://www.linkedin.com/in/kiel-sprague/"> {LkIn}</a></p></div>
        <div className="cell medium-2"><p>Site</p><p><a href="whoami"><span id="who">Who am I?</span></a></p><p><a href="projects">Projects</a></p><p><a href="goals">Goals</a></p><p><a href="contact">Reach Out</a></p></div>
    </footer>
);}

export default Foot;