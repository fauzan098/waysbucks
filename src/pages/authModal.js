import React, { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import { useContext } from 'react'
import { Usercontext } from "../context/user-context";
import { useNavigate } from 'react-router';
import logowaysbuck from '../assets/img/logowaysbuck.png'

export default function AuthModal() {
  const [show, setShow] = useState(false);
  
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function Switchtologin(){
    setShow(false)
    setShowRegister(true)
  }
  function SwitchtoRegister(){
    setShowRegister(false)
    setShow(true)
  }



  const navigate =useNavigate()
  const [state, dispatch] = useContext(Usercontext)


  const handleSubmit = (e) => {
    e.preventDefault();
    let status 
    const email = document.getElementById('emailinput').value
    const password = document.getElementById('passwordinput').value

    if (email === 'admin@mail.com'){
      status = 'admin'
      navigate('/admin')
    }else{
      status = 'user'
      navigate('/main')
    }

    const data = {email, password, status}

    dispatch({
      type : 'LOG_IN',
      payload : data
    })
    setShow(false)
  }

  return (
    <>
  <div className='navbar ms-5 me-5'   >
    <div className='ms-5 mt-2'>
        <img src={logowaysbuck}style={{cursor:'pointer'}}/>
    </div>
        <div className='detail-productPage d-flex me-3'>
          <div className='d-flex'>
            <Button variant="primary" className='ms-2 me-2 bg-white border-danger text-danger' onClick={handleShow}>
              Login
            </Button>
          </div>
          <div className='d-flex'>
            <Button variant="danger" className='ms-2 me-5 bg-danger' onClick={handleShowRegister}>
              Register
            </Button>
          </div>
        </div>
    </div>       
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Login</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Control 
                  className='inputProduct border-danger' 
                  type="email" 
                  name='email'
                  id='emailinput' 
                  placeholder="Email" 
                  style={{width : '100%'}} />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Control 
                  className='inputProduct border-danger' 
                  type="password" 
                  name='password'
                  id='passwordinput' 
                  placeholder="Password" 
                  style={{width : '100%'}}/>
            </Form.Group>
            <Button className='float-sm-end bg-danger xs-{3}' variant="danger" type="submit">
                Login
            </Button>
            <div>
              <p>Don't have an account ? klik 
                <a onClick={Switchtologin} style={{cursor: 'pointer'}}><b> here</b> </a> 
              </p>
          </div>
        </Form>
        </Modal.Body>
      </Modal>

    <Modal show={showRegister} onHide={handleCloseRegister}>
      <Modal.Header closeButton>
        <Modal.Title className='text-danger'>Register</Modal.Title>
      </Modal.Header> 
      <Modal.Body>
      <Form>
          <Form.Group className="mb-3" >
              <Form.Control className='inputProduct border-danger' type="email" name='email' placeholder="Email"  style={{width : '100%'}}/>
          </Form.Group>
          <Form.Group className="mb-3" >
              <Form.Control className='inputProduct border-danger' type="password" name='password' placeholder="Password" style={{width : '100%'}}/>
          </Form.Group>
          <Form.Group className="mb-3" >
              <Form.Control className='inputProduct border-danger' type="text" name='fullname' placeholder="Full Name" style={{width : '100%'}}/>
          </Form.Group>
          <Button className='float-sm-end bg-danger' variant="danger" type="submit">
              Register
          </Button>
          <div>
              <p>Already have an account ? klik 
                <a onClick={SwitchtoRegister} style={{cursor :'pointer'}}><b> here</b> </a> 
              </p>
          </div>
      </Form>
      </Modal.Body>
    </Modal>
  </>
  )
}
