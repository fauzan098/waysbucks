import React from 'react'
import { NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import logowaysbuck from '../../assets/img/logowaysbuck.png'
import ProfilePhoto from '../../assets/img/profile.png'
import Group from '../../assets/img/Group.svg'
import Logout from '../../assets/img/logout1.svg'
import Topping1 from '../../assets/img/topping1.svg'

export default function NavbarAdmin() {
  
    const photoProfile = <img src={ProfilePhoto}/> 
    
    const moving = useNavigate()
    const moveToadmin = () => {
      moving('/admin')
    }
  return (
  <>
  <div className='navbar ms-5 me-5'>
    <div className='ms-5 mt-2'>
        <img src={logowaysbuck} onClick={moveToadmin} style={{cursor:'pointer'}} />
    </div>
        <div className='d-flex me-5 float-right-end'>
            <NavDropdown title={photoProfile}>
                <NavDropdown.Item href="/add-drink">
                  <div className='d-flex'>
                    <img src={Group}/>
                    <p className='mt-3 ms-3 me-5'>Add Product</p>
                  </div>
                </NavDropdown.Item>
                <NavDropdown.Item href="/add-toping">
                  <div className='d-flex'>
                    <img src={Topping1}style={{cursor:'pointer'}}/>
                    <p className='mt-3 ms-3 me-5'>Add Topping</p>
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
