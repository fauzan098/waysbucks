import React, { useState } from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import NavbarUser from './navbarUser'
import logowaysbuck from '../assets/img/logowaysbuck.png'
import ProfilePhoto from '../assets/img/profile.png'
import Imgkeranjang from '../assets/img/imgkeranjang.png'
import '../styles/detailProduct.css'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import DummyDataToping from "../components/DataDummy/DataToping"

export default function DetailProduct(props) {

  const { id } = useParams(DummyDataToping)
  console.log(id-1);
  console.log(props);

  const [toppings] =useState(DummyDataToping)

  const eucok =useNavigate()
  return (
    <>
    {/* <div className='navbar ms-5 me-5 mb-3'>
        <div className='ms-5 mt-2'>
          <img src={logowaysbuck} onClick={() => eucok('/')} style={{cursor:'pointer'}}/>
        </div>
        <div className='detail-productPage d-flex me-3'>
          <img className='profile-photo float-right-end me-5 mt-3' src={Imgkeranjang} />
          <img className='profile-photo float-right-end ' src={ProfilePhoto} />
        </div>
      </div> */}
      <NavbarUser/>
      <div className='d-flex justify-content-center mt-5'>
        <div className='detailProdukImg'>
         <img src={props.data[id].img}/>
        </div>
        <div className='title-detailProduct ms-3' style={{width:'40%'}} >
          <h2 className='ms-4' style={{color :'#BD0707'}}>{props.data[id].name}</h2>
          <p className='mt-3 mb-5 ms-4'>Rp.{props.data[id].price}</p>
          <div className='list-toping mt-5'>
            <h5>Toping</h5>
                <div className='toping'>
                    <Row className='list-toping1'>
                      {toppings.map((item, index) =>(
                        <Col className='col-toping'>
                          <div className='d-flex justify-content-center'>
                          <img src={item.img} style={{cursor : 'pointer'}}/>
                          </div>
                              <p className='mt-1 ms-4  text-center fw-bolder fs-6'>{item.name}</p>
                        </Col>
                      ))}
                      <Row className='justify-content-between mb-3 mt-5'>
                        <Col className='col-8 ms-4' style={{color: '#974A4A'}}><p>Total</p></Col>
                        <Col  className='col-2 me-3'>
                          <p className='font-weight-bold'>Rp.{props.data[id].price}</p> 
                        </Col>
                      </Row>
                      <Button variant="danger" className='ms-4 mb-5' style={{width: '92%'}}>Add Cart</Button>
                    </Row>
                </div>
          </div>
        </div>
      </div>
    </>
  )
}
