import React from 'react';
import { Accordion, Card, Image, Button, Container } from 'react-bootstrap';


function PastProjectsAccordion(props) {
    console.log(props)
    var projects = props.projects;

    return (
        <Container fluid>
        <Accordion>
            { projects.map(project => {
                return(
                    <Card key={project.key}>
                    <Accordion.Toggle as={Card.Header} eventKey={project.key}>
                    {project.name}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={project.key}>
                    <Card.Body className="text-center">
                        <Image className="img" src={project.image} thumbnail/><br/>
                       <p>{project.description}</p>
                        <p><Button variant="primary" href={project.site} target="_blank"style={{marginRight: "10px"}}>Live Page</Button>
                        <Button variant="primary" href={project.repo} target="_blank">Code Repo</Button></p>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                )
            })}
        </Accordion> 
        </Container>
    )
}

export default PastProjectsAccordion
