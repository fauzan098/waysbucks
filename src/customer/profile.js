import React from 'react'
import NavbarUser from "./navbarUser";

import "../styles/profile.css";

import Profilephoto from '../assets/img/profilephoto.png'
import Icecoffegreentea from '../assets/img/icecoffegreentea.png'
import Logowaysbuck from '../assets/img/logowaysbuck.png'
import Qrcode from '../assets/img/qrcode.png'

export default function Profile() {

    const profilephoto = <img src={Profilephoto}/>

  return (
    <>
    <NavbarUser/>
    <div className='profile d-flex mt-4 py-3 justify-content-center'>
        <div className='myProfile ms-5'>
            <h2 className=''>MY PROFILE</h2>
            <div className='d-flex mt-4'>
                <div>
                    <img src={Profilephoto} />
                </div>
                <div className='detail-profile'>
                    <h5 style={{color:'#613D2B;'}} className='ms-4'>Full name</h5>
                    <p className='ms-4'>Egi Ganteng</p>
                    <h5 style={{color:'#613D2B;'}} className='ms-4 mt-3'>Email</h5>
                    <p className='ms-4'>egigans@gmail.com</p>
                </div>
            </div>
        </div>
        <div className='myTransaction '>
        <h2 className=''>My Transaction</h2>
            <div className='detailTransaction py-2 px-2 mt-4 d-flex'>
                <div className=''>
                    <div className='d-flex'>
                        <div>
                            <img className='img-drink' src={Icecoffegreentea} />
                        </div>
                        <div className='ms-3'>
                            <h4 style={{color :"#BD0707"}}>Ice coffe palm sugar</h4>
                            <p className='text-danger'> <strong>Saturday</strong>, 5 march 2020</p>
                            <p className='text-danger'> Toping &nbsp; : Bill Berry Boba, Bubble Tea Gelatin</p>
                            <p className='text-danger'>Price : Rp.33.000</p>
                        </div>
                    </div>
                    {/* <div className='d-flex'>
                        <div>
                            <img className='img-drink' src={Icecoffegreentea} />
                        </div>
                        <div className='ms-4'>
                            <h4>ice coffe palm sugar</h4>
                            <p>saturday, 5 march 2020</p>
                            <p>toping : bill Berry Boba, Bubble Tea Gelatin</p>
                            <p>price : rp.33.000</p>
                        </div>
                    </div> */}
                </div>
                <div className='ms-4'>
                    <div className='mb-2'>
                        <img src={Logowaysbuck} />
                    </div>
                        <img src={Qrcode} />
                    <div className='mt-2 ms-2'>
                        <span>on the wayt</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
