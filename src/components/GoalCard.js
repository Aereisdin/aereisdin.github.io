import React from "react";
import { useSpring, animated } from "react-spring"

function GoalCard() {
const props = useSpring({
    delay: 2500,
    to: {opacity: 1}, 
    from: { opacity: 0} 
})
const CardStyle = {
    width: "fit-content",
    height: "fit-content",
    position: "absolute",
    top: "10%",
    left: "50%",
    backgroundColor: "rgba(128, 166, 255, 0.8)",
    color: "#222"
}
const CardHead = {
    backgroundColor: "rgba(255, 230, 128, 0.9)",
    textAlign: "Center",
    borderBottom: "solid 1px white"
}
const CardBody = {
    fontSize: "1.5em",
    fontWeight: "700",
    color: "#222",
}
return (
    <animated.div style={props} className="cell">
        <div className="card" style={CardStyle}>
            <div className="card-divider" style={CardHead}>
                <h1 className="card-head">Building Forward</h1>
            </div>
            <div className="card-section" style={CardBody}>
                <ul>
                    <li>Healthy Work - Family Life Balance</li>
                    <li>Building Code for a Better Future</li>
                    <li>Continuing Education</li>
                    <li>Traveling and Working Abroad</li>
                    <li>Good Health and Dental Coverage</li>
                    <li>Being Inpired by my Team</li>
                </ul>
            </div>
        </div>
    </animated.div>
);
}

export default GoalCard;
