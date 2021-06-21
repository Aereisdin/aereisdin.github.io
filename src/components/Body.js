import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';



function Body() {
    return (
        <Container>
            <Row style={{height: "50px"}}>
                <Col>
                    These are the words you see.
                </Col>
            </Row>
            <Row className="d-flex justify-content-evenly">
                <Col sm={10} md={10} lg={10}>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block c-img"
                    src="kiel.JPG"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block c-img"
                    src="plantsy.png"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block c-img"
                    src="screenshot.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Col>  
            </Row>
            <Row>
                <Col>
                    So exciting!!!
                </Col>
            </Row>
        </Container>
    )
}

export default Body
