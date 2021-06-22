import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';



function Body() {
    return (
        <Container>
            <Row style={{height: "50px"}}>
              
            </Row>
            <Row className="d-flex justify-content-evenly">
                <Col sm={10} md={10} lg={10}>
            <Carousel>
                <Carousel.Item>
                    <img
                    style={{borderRadius: "5px"}}
                    className="d-block c-img"
                    src="kiel.JPG"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{fontWeight: "700"}}>Kiel Sprague</h3>
                    <p>Dreaming big!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{borderRadius: "5px"}}
                    className="d-block c-img"
                    src="plantsy.png"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{fontWeight: "700"}}>Plantsy</h3>
                    <p>A React Project</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{borderRadius: "5px"}}
                    className="d-block c-img"
                    src="jnk.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{fontWeight: "700"}}>Jonathan & Kiel</h3>
                    <p>Taking time to enjoy nature.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style={{borderRadius: "5px"}}
                    className="d-block c-img"
                    src="screenshot.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{fontWeight: "700"}}>My first page</h3>
                    <p>My very first published project.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Col>  
            </Row>
            <Row>
             
            </Row>
        </Container>
    )
}

export default Body
