import React, { useState } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import Register from './register'
import Login from './login'
import { useContext } from 'react'
import { Usercontext } from "../context/user-context";
import { useNavigate } from 'react-router';
import datas from '../components/DataDummy/DataToping';

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

  const [form, setForm] =useState({
    name:'',
    email: '',
    password: '',
  });

  const {name, eamil, password} = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const navigate =useNavigate()
  const [state, dispatch] = useContext(Usercontext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('emailinput').value
    const password = document.getElementById('passwordinput').value

    let status 
    if (email === 'admin@mail.com'){
      status = 'admin'
      navigate('/admin')
    }else{
      status = 'user'
      navigate('/')
    }

    dispatch({
      type : 'LOGIN_SUCCES',
      payload : datas
    })
    setShow(false)
  }

  return (
    <>
    <Button variant="primary" className='ms-2 me-2 bg-white border-danger text-danger' onClick={handleShow}>
      Login
    </Button>
    <Button variant="danger" className='ms-2 me-5 bg-danger' onClick={handleShowRegister}>
      Register
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-danger'>Login</Modal.Title>
        </Modal.Header> 
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control 
                  className='inputProduct border-danger' 
                  type="email" 
                  name='email'
                  id='emailinput' 
                  placeholder="Email" 
                  style={{width : '100%'}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
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
              <p>Already have an account ? klik 
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control className='inputProduct border-danger' type="email" name='email' placeholder="Email"  style={{width : '100%'}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control className='inputProduct border-danger' type="password" name='password' placeholder="Password" style={{width : '100%'}}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
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
