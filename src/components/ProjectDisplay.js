import React from 'react'

export default function ProjectDisplay(props) {
    var projects = props.projects;

    return (
        <div className="cell small-10 medium-8 large-8">
           {projects.map(project => {
               return(
                <div className="cell small-10 medium-8 large-8 project">
                    <div className="small-12 medium-10 large-10" key={project.key}><span style={{textAlign: 'center'}}>{project.name}</span><br/>
                        <img src={project.image} style={{width: "550px", height: "auto", borderRadius: "5px", alignContent: 'start'}}/><br/>
                        <div className="grid-x">
                        <div className="small-12 medium-8 large-8" style={{textAlign: "start", fontSize: "0.85em", paddingLeft: "15px", paddingTop: "15px", fontFamily: "Cambria"}}>{project.description}</div>
                        <div className="small-12 medium-4 large-4">
                            <ul style={{textAlign: "start", fontSize: "0.75em"}}>
                                {project.technologies.map(tech => {
                                    return(<li>{tech}</li>)
                                })}
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>    
               );
           })} 
        </div>
    )
}
