import React from 'react';
import { animated } from "react-spring";

function Me(text, animation) {
const input = text
const effect = animation
    return (
        <animated.div style={effect} className="card fullStack Kiel">
        {input}
        </animated.div>
    )
}

export default Me
