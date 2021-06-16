import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function PastProjects() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button bsPrefix="nav-button" onClick={handleShow}>
        Portfolio of Projects
        </Button>
  
        <Modal
          show={show}
          centered
          onHide={handleClose}
          backdrop="static"
          keyboard={true}
        >
          <Modal.Header>
            <Modal.Title>Prior Projects</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default PastProjects
