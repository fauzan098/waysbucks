import React, { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';

function Login() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className='ms-2 me-2 bg-white border-danger text-danger' onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Login</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='inputProduct border-danger' type="email" placeholder="Email" style={{width : '100%'}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className='inputProduct border-danger' type="password" placeholder="Password" style={{width : '100%'}}/>
            </Form.Group>
            <Button className='float-sm-end bg-danger xs-{3}' variant="danger" type="submit">
                Login
            </Button>
        </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login