import React, { useState } from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';

function AboutMe() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Button bsPrefix="nav-button" onClick={handleShow}>
        About Me
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
            <Modal.Title><h1 className="align-self-center">Kiel Sprague</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <Container fluid>
                <Row className="text-center">
                    <Col sm={6} md={6} lg={6}>
                        <Image className="img" src="./kiel.jpeg" thumbnail/>
                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <br/> 
                      <p>"I believe that humanity through code and technology has the ability to make the world a better place for all peoples. Therefore, I strive to use code to make the world better."</p>
                      <br/> ~Kiel Sprague
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={4} lg={4} className="langs">
                    <h2>Languages & Technologies</h2>
                    <ul>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>HTML</li>
                        <li>CSS & SCSS</li>
                        <li>JSX</li>
                        <li>React</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>GIT</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Bootstrap</li>
                        <li>Foundation</li>
                        <li>REST</li>
                        <li>API</li>
                        <li>Computer Science Fundimentals</li>
                        <li>JSON</li>
                        <li>Luxon</li>
                        <li>AJAX</li>
                        <li>Swift</li>
                        <li>AWS</li>
                    </ul>
                    </Col>
                    <Col sm={6} md={4} lg={4}>
                        
                    </Col>
                    <Col sm={6} md={4} lg={4}>
                    
                    </Col>
                </Row>
            </Container>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default AboutMe
