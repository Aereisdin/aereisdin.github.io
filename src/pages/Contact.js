import React from "react";
import { useSpring, animated } from "react-spring";

function Contact() {
    const style = {
        color: "#053357",
         fontSize: "1.5em", 
         fontWeight: 700, 
         backgroundColor: "#ffb92e", 
         paddingLeft: "10px",
         paddingRight: "10px",
         paddingTop: "5px",
         paddingBottom: "5px", 
         borderRadius: "5px"
    }
    const effect1 = useSpring({
        delay: 1000,
        from: {opacity: 0},
        to: {opacity: 1}
    })
    const effect2 = useSpring({
        delay: 1250,
        from: {opacity: 0},
        to: {opacity: 1}
    })
    const effect3 = useSpring({
        delay: 1500,
        from: {opacity: 0},
        to: {opacity: 1}
    })
    const effect4 = useSpring({
        delay: 1750,
        from: {opacity: 0},
        to: {opacity: 1}
    })
    const effect5 = useSpring({
        delay: 2000,
        from: {opacity: 0},
        to: {opacity: 1}
    })
    const zoom = useSpring({
        delay: 2250,
        from: {opacity: 0},
        to: {opacity: 1}
    })
    const transition = useSpring({
        from: {opacity: 0},
        to: {opacity: 1}
      })
      
    return(
        <animated.main style={transition} className="grid-container fluid contact">
            <form style={{paddingTop: "50px"}}>
            <div className="grid-container">
                <div className="grid-x grid-padding-x">
                    <animated.div style={effect1} className="medium-6 cell">
                        <label><span style={style}> First Name </span>
                        <input type="text" placeholder="First Name"/>
                        </label>
                    </animated.div>
                    <animated.div style={effect2} className="medium-6 cell">
                        <label><span style={style}>Last Name</span>
                        <input type="text" placeholder="Last Name"/>
                        </label>
                    </animated.div>
                </div>
                <div className="grid-x grid-padding-x">
                    <animated.div style={effect3} className="medium-6 cell">
                        <label><span style={style}>Email</span>
                        <input type="email" placeholder="Email"/>
                        </label>
                    </animated.div>
                    <animated.div style={effect4} className="medium-6 cell">
                        <label><span style={style}>Phone Number</span>
                        <input type="tel" placeholder="Phone Number"/>
                        </label>
                    </animated.div>
                </div>
                <div className="grid-x grid-padding-x">
                    <animated.div style={effect5} className="medium-6 cell">
                    <label>
                    <span style={style}>What would you like to talk about?</span>
                    <textarea placeholder="Message"style={{height: 100}}></textarea>
                    </label>
                    </animated.div>
                </div>
                <animated.button style={{backgroundColor: "red", padding: "10px", borderRadius: "5px", fontSize: "1.5em", ...zoom}}>Send</animated.button>
            </div>
            </form>
        </animated.main>
    )
}

export default Contact;