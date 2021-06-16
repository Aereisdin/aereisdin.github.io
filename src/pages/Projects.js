import React from 'react';
import { useSpring, animated } from 'react-spring';
import ProjectDisplay from '../components/ProjectDisplay';


function Projects() {
    const display = useSpring({
        delay: 300,
        to: {opacity: 1}, 
        from: { opacity: 0} 
     })

    const projects = [{
        key: "project1",
        image: "./assets/images/project1.png",
        name: "Team Awesome",
        description: "This is the very first group project I worked on. It is meant to become a Newbie Coder resource. This was a very fun and interesting project made challenging by our first use of GitHub as a group.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery", "CSS Framework - Foundation"],
        repo: "https://github.com/Aereisdin/teamAwesome",
        site: "https://aereisdin.github.io/teamAwesome/"
    },{
        key: "project2",
        image: "./assets/images/project2.png",
        name: "Plantsy version Handlebars",
        description: "This is the second group project that I worked on. With a completely new team and using a more dynamic set of technologies, we were tasked with creating a unique app, Plantsy was the result. This was an amazing project to be on! My team made this all possible!",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery", "CSS Framework - Bootstrap", "Handlebars", "Express", "Node", "MySql"],
        repo: "https://github.com/Aereisdin/plantsy",
        site: "https://limitless-cove-25591.herokuapp.com/"
    },{
        key: "project3",
        image: "./assets/images/project2.png",
        name: "Plantsy version React",
        description: "For this last class project we translated the app from handlebars providing the backend to using React. This was a challenge as React is a very different technology and it's relationship to the backend is different. We added improvements to the existing layout and functionality of the app as well as created a whole new area called 'Trellis' which is a message board allowing the users to post about topics they care about.",
        technologies: ["HTML", "CSS", "JavaScript", "CSS Framework - Bootstrap", "React", "Express", "Node", "MySql"],
        repo: "https://github.com/theadamhorn/plantsy",
        site: "Coming Soon!"
    }]



    return (
        <main className="grid-container fluid projectPage">
            <animated.div style={display} className="grid-x grid-margin-x align-center">
                <ProjectDisplay 
                projects={projects}
                />
            </animated.div>
        </main>
            
    )
}

export default Projects
