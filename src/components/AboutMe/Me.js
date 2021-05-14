import React from 'react';
import { animated } from "react-spring";

function Me(text, animation) {
const input = text
const effect = animation
    return (
        <animated.div style={effect} className="cell small-2 medium-3 large-2 Kiel">
        {input}
        </animated.div>
    )
}

export default Me
