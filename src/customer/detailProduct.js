import React from 'react'
import { Row,Col,Button } from 'react-bootstrap'
import logowaysbuck from '../assets/img/logowaysbuck.png'
import ProfilePhoto from '../assets/img/profile.png'
import Imgkeranjang from '../assets/img/imgkeranjang.png'
import Icecoffegreentea from '../assets/img/icecoffegreentea.png'
import Toping1 from '../assets/img/toping/toping1.png'
import Toping2 from '../assets/img/toping/toping2.png'
import Toping3 from '../assets/img/toping/toping3.png'
import Toping4 from '../assets/img/toping/toping4.png'
import Toping5 from '../assets/img/toping/toping5.png'
import Toping6 from '../assets/img/toping/toping6.png'
import Toping7 from '../assets/img/toping/toping7.png'
import Toping8 from '../assets/img/toping/toping8.png'
import '../styles/detailProduct.css'

export default function DetailProduct() {
  return (
    <>
    <div className='navbar ms-5 me-5 mb-3'>
        <div className='ms-5 mt-2'>
          <img src={logowaysbuck} />
        </div>
        <div className='detail-productPage d-flex me-3'>
          <img className='profile-photo float-right-end me-5 mt-3' src={Imgkeranjang} />
          <img className='profile-photo float-right-end ' src={ProfilePhoto} />
        </div>
      </div>
      <div className='d-flex justify-content-center mt-5'>
        <div className='detailProdukImg'>
         <img src={Icecoffegreentea}/>
        </div>
        <div className='title-detailProduct ms-3' style={{width:'40%'}} >
          <h2 className='ms-4' style={{color :'#BD0707'}}>Ice Coffe Green Tea</h2>
          <p className='mt-3 mb-5 ms-4'>Rp.27.000</p>
          <div className='list-toping mt-5'>
            <h5>Toping</h5>
            <div className='toping'>
              <Row className='list-toping1'>
                <Col className='col-toping'>
                  <img src={Toping2}/>
                  <Row className='row-toping'>
                    <p className='nameToping mt-3'>Bubble Tea Gelatin</p>
                  </Row>
                </Col>
                <Col className='col-toping'>
                  <img src={Toping2}/>
                  <Row className='row-toping'>
                    <p className='nameToping mt-3'>Manggo</p>
                  </Row>
                </Col>
                <Col className='col-toping'>
                  <img src={Toping2}/>
                  <Row className='row-toping'>
                    <p className='nameToping mt-3'>Green Coconut</p>
                  </Row>
                </Col>
                <Col className='col-toping'>
                  <img src={Toping2}/>
                  <Row className='row-toping'>
                    <p className='nameToping mt-3'>Boba Manggo</p>
                  </Row>
                </Col>
                <Col className='col-toping'>
                  <img src={Toping2}/>
                  <Row className='row-toping'>
                    <p className='nameToping mt-3'>Bill Berry Boba</p>
                  </Row>
                </Col>
                <Col className='col-toping'>
                  <img src={Toping2}/>
                  <Row className='row-toping'>
                    <p className='nameToping mt-3'>Kiwi Popping Pearl</p>
                  </Row>
                </Col>
                <Col className='col-toping'>
                  <img src={Toping2}/>
                  <Row className='row-toping'>
                    <p className='nameToping mt-3'>Matcha Cantaloupe</p>
                  </Row>
                </Col>
                <Col className='col-toping'>
                  <img src={Toping2}/>
                  <Row className='row-toping'>
                    <p className='nameToping mt-3'>Strawberry Popping</p>
                  </Row>
                </Col>
              </Row>
              <Row className='justify-content-between mb-5'>
                <Col className='col-8 ms-4' style={{color: '#974A4A'}}>Total</Col>
                <Col className='col-2'>Rp.27.000</Col>
              </Row>
              <Button variant="danger" className='ms-4 mb-5' style={{width: '95%'}}>Add Cart</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
