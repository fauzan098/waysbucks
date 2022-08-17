import React from 'react'
import { NavDropdown } from 'react-bootstrap';

import { useNavigate } from 'react-router';
import logowaysbuck from '../assets/img/logowaysbuck.png'
import Imgkeranjang from '../assets/img/imgkeranjang.png'
import ProfilePhoto from '../assets/img/profile.png'
import Logout from '../assets/img/logout1.svg'
import User from '../assets/img/user.svg'
import '../styles/style.css'

export default function NavbarUser() {
    const photoProfile = <img src={ProfilePhoto}/> 
    const logo = <img src={ProfilePhoto}/> 

    const moving = useNavigate()
    const moveToCart = () => {
      moving('/cart')
    }
  return (
  <>
  <div className='navbar ms-5'   >
        <span class="badge rounded-circle bg-danger" style={{position:"absolute", top:"40px", right:"90px"}}> 
                {/* {plusOne} */}
              <span class="visually-hidden">
                  unread messages
              </span> 
          </span>
    <div className='ms-4 mt-2'>
        <img src={logowaysbuck}style={{cursor:'pointer'}}/>
    </div>
        <div className=' d-flex me-3'>
            <img className='profile-photo float-right-end me-4 mt-4' src={Imgkeranjang} onClick={moveToCart} style={{cursor:'pointer'}} />
            <NavDropdown className='me-3' title={photoProfile} >
                <NavDropdown.Item href="/profile">
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
