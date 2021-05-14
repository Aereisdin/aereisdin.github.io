import React, { useState } from "react";
import { useSpring, animated } from 'react-spring';
import Me from "../components/AboutMe/Me";

function AboutMe () {
const [showComponent, setShowComponent] = useState(true)

const div1 = useSpring({
    delay: 500,
    to: async (next, cancel) => {
        await next({opacity: 1, transform: "scale(1) translateY(0)"})
        await next({opacity: 0, transform: "scale(0) translateY(10px)"})
    }, 
    from: { opacity: 0, transform: "scale(0.75) translateY(5px)"} 
})

const div2 = useSpring({
    delay: 750,
    to: async (next, cancel) => {
        await next({opacity: 1, transform: "scale(1) translateY(0)"})
        await next({opacity: 0, transform: "scale(0) translateY(10px)"})
    }, 
    from: { opacity: 0, transform: "scale(0.75) translateY(5px)"} 
})
const div3 = useSpring({
    delay: 1000,
    to: async (next, cancel) => {
        await next({opacity: 1, transform: "scale(1) translateY(0)"})
        await next({opacity: 0, transform: "scale(0) translateY(10px)"})
    },     
    from: { opacity: 0, transform: "scale(0.75) translateY(5px)"} 
})
const div4 = useSpring({
    delay: 1250,
    to: async (next, cancel) => {
        await next({opacity: 1, transform: "scale(1) translateY(0)"})
        await next({opacity: 0, transform: "scale(0) translateY(10px)"})
    },     
    from: { opacity: 0, transform: "scale(0.75) translateY(5px)"} 
})
const div5 = useSpring({
    delay: 1500,
    to: async (next, cancel) => {
        await next({opacity: 1, transform: "scale(1) translateY(0)"})
        await next({opacity: 0, transform: "scale(0) translateY(10px)"}, )
    },     
    from: { opacity: 0, transform: "scale(0.75) translateY(5px)"} 
})
const div6 = useSpring({
    delay: 2000,
    to: async (next, cancel) => {
        await next({opacity: 1, transform: "scale(1) translateY(0)", marginLeft: 0})
        await next({ marginLeft: -1050})
        await next({ marginLeft: -2200})
        await next({ marginLeft: -500})
        await next({ marginLeft: 0})
        // await next({ marginLeft: -500})
        // await next({ marginLeft: 0 })
    }, 
    from: { opacity: 0, transform: "scale(0.75) translateY(5px)", marginLeft: 0} 
})

const jk = useSpring({
    delay: 3500,
    from: {opacity: 0, marginLeft: -2000},
    to: async (next, cancel) => {
        await next({opacity: 1, marginLeft: 230})
        await next({ marginLeft: 280 })
        await next({ marginLeft: 230 })
        await next({ marginLeft: 260 })
        await next({ marginLeft: 220 })
        await next({ marginLeft: 250 })
        await next({ marginLeft: 230 })
        await next({ marginLeft: 240 })
        await next({ marginLeft: 210 })
    },
})
const odin = useSpring({
    delay: 3500,
    from: {opacity: 0, marginLeft: 500},
    to: async (next, cancel) => {
        await next({opacity: 1, marginLeft: 0})
        await next({ marginLeft: 55 })
        await next({ marginLeft: 25 })
        await next({ marginLeft: 35 })
        await next({ marginLeft: 15 })
        await next({ marginLeft: 5 })
        await next({ marginLeft: 5 })
        await next({ marginLeft: 0 })
        await next({ opacity: 0 })
    },
})

console.log(odin)

var languages = useSpring({
    delay: 3500,
    to: async (next, cancel) => {
        await next({opacity: 1, marginLeft: 0})
        await next({ marginLeft: 55 })
        await next({ marginLeft: 25 })
        await next({ marginLeft: 35 })
        await next({ marginLeft: 20 })
        await next({ marginLeft: 10 })
        await next({ marginLeft: 5 })
        await next({ marginLeft: 0 })
        // await next({ marginLeft: -200 })
    },
    from: {opacity: 0, marginLeft: 500},
})

const para = useSpring({
    to: async (next, cancel) => {
        await next({opacity: 0.5, marginTop: -50})
        await next({opacity: 1, marginTop: -50})
    },
    from: {opacity: 0}
  })

const transition = useSpring({
    to: async (next, cancel) => {
        await next({opacity: 0.5})
        await next({opacity: 1})
    },
    from: {opacity: 0}
  })

const removeComp = () =>{
 if(showComponent){
     setShowComponent(false)
 }
}

return(
    <animated.main style={transition} className="grid-container fluid AboutMe">
        <div className="grid-x grid-margin-x align-center">
            {showComponent ? Me(`Husband`, div1): ``}
            {showComponent ? Me(`Uncle`, div2): ``}
            {showComponent ? Me(`Veteran`, div3): ``}
            {showComponent ? Me(`Brother`, div4): ``}
            {showComponent ? Me(`Artist`, div5): ``}
            {Me(`Full Stack Developer`, div6)}
        </div>
        <div className="grid-x grid-margin-x align-center">
            <animated.div className="cell small-12 medium-4 large-4 Kiel jk" style={{textAlign: "end", fontSize: "1.75em", paddingRight: "5px", ...jk }}>
                <span style={{backgroundColor: "#444", paddingLeft: "5px", paddingRight: "5px", borderRadius: "5px"}}>Jonathan & Kiel</span>
            </animated.div>
            {showComponent ? 
            <animated.div className="cell small-12 medium-2 large-2 Kiel odin" style={{textAlign: "end", color: "#222", fontSize: "1.75em", paddingRight: "5px", ...odin }}>
                Odin
            </animated.div> : ``}
            <animated.div style={{textAlign: "start", fontSize: "1.25em", ...languages}} className="cell small-12 medium-3 large-2 Kiel">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Express</li>
                    <li>Node</li>
                    <li>Bootstrap</li>
                    <li>Foundation</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>Luxon</li>
                    <li>React</li>
                </ul>
            </animated.div>
        </div>
        <div className="grid-x grid-margin-x align-start">
            <animated.div className="cell small-12 medium-8 large-8 Kiel" style={{fontSize: "1.5em", fontFamily: "InknutAntiqua", fontWeight: 400, ...para}}>
                <p>My name is Kiel, pronounced like Kyle.</p>
                <p>Who am I? Simple and yet difficult to answer. I am a Full Stack Engineer. What does that mean? From the front end of web design and implimentation, to the back-end where the data is saved on the servers and all the structures inbetween... I build, update, maintain and strive to understand.</p>
            </animated.div>
        </div>
        {setTimeout( removeComp, 5000)}
    </animated.main>
);
}


export default AboutMe;