import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import logowaysbuck from '../assets/img/logowaysbuck.png'
import Imgkeranjang from '../assets/img/imgkeranjang.png'
import ProfilePhoto from '../assets/img/profile.png'
import Logout from '../assets/img/logout1.svg'
import User from '../assets/img/user.svg'

export default function navbarUser() {
    const photoProfile = <img src={ProfilePhoto}/> 
    const logo = <img src={ProfilePhoto}/> 
  return (
  <>
  <div className='navbar ms-5 me-5' style={{width:'100%'}}>
    <div className='ms-5 mt-2'>
        <img src={logowaysbuck}style={{cursor:'pointer'}}/>
    </div>
        <div className='detail-productPage d-flex me-3'>
            <img className='profile-photo float-right-end me-4 mt-4' src={Imgkeranjang} />
            <NavDropdown title={photoProfile} >
                <NavDropdown.Item href="/AddToping">
                  <div className='d-flex'>
                    <img src={User}style={{cursor:'pointer'}}/>
                    <p className='mt-3 ms-3 me-5'>Profile</p>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">
                  <div className='d-flex'>
                    <img src={Logout}style={{cursor:'pointer'}}/>
                    <p className='mt-3 ms-3 me-5 fw-normal'>Logout</p>
                  </div>
                </NavDropdown.Item>
            </NavDropdown>
        </div>
    </div>
  </>
  )
}
