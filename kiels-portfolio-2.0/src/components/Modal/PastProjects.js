import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PastProjectsAccordion from '../Accordion/PastProjects'

function PastProjects() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const projects = [{
        key: "project3",
        image: "./plantsy.png",
        name: "Plantsy version React",
        description: "For this last class project we translated the app from handlebars providing the backend to using React. This was a challenge as React is a very different technology and it's relationship to the backend is different. We added improvements to the existing layout and functionality of the app as well as created a whole new area called 'Trellis' which is a message board allowing the users to post about topics they care about.",
        technologies: ["HTML", "CSS", "JavaScript", "CSS Framework - Bootstrap", "React", "Express", "Node", "MySql"],
        repo: "https://github.com/theadamhorn/plantsy",
        site: "https://plantsyapp.herokuapp.com/"
    },{
        key: "project2",
        image: "./plantsy.png",
        name: "Plantsy version Handlebars",
        description: "This is the second group project that I worked on. With a completely new team and using a more dynamic set of technologies, we were tasked with creating a unique app, Plantsy was the result. This was an amazing project to be on! My team made this all possible!",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery", "CSS Framework - Bootstrap", "Handlebars", "Express", "Node", "MySql"],
        repo: "https://github.com/Aereisdin/plantsy",
        site: "https://limitless-cove-25591.herokuapp.com/"
    },
	{
        key: "project1",
        image: "./screenshot.png",
        name: "Team Awesome",
        description: "This is the very first group project I worked on. It is meant to become a Newbie Coder resource. This was a very fun and interesting project made challenging by our first use of GitHub as a group.",
        technologies: ["HTML", "CSS", "JavaScript", "jQuery", "CSS Framework - Foundation"],
        repo: "https://github.com/Aereisdin/teamAwesome",
        site: "https://aereisdin.github.io/teamAwesome/"
    }]

    return (
      <>
        <Button bsPrefix="nav-button" onClick={handleShow}>
        Portfolio of Projects
        </Button>
  
        <Modal
          show={show}
          size='lg'
          centered
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
        >
          <Modal.Header>
            <Modal.Title>Prior Projects</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <PastProjectsAccordion
          projects={projects}
          />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default PastProjects
