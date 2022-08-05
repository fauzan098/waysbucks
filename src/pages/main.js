import React from 'react'
import Landing from '../components/background'
import "../styles/style.css"
import { Card } from 'react-bootstrap'
import Rectangle from '../assets/img/Rectangle.png'
import drink1 from '../assets/img/cleponcoffe.png'
import Login from './login'
import Register from './register'
import logowaysbuck from '../assets/img/logowaysbuck.png'

export default function Main() {
  return (
    <>
    <div className='card'>
      <div className='navbar ms-5 me-5 '>
        <div className='ms-5 mt-2'>
          <img src={logowaysbuck} />
        </div>
        <div className='auth'>
          <Login />
          <Register />
        </div>
      </div>
            <Card id='card-main'>
                <div className='card-name'>
                    <p id="title-card-home">Waysbuck</p>
                </div>
                <div className='card-name'>
                    <p id='title-card-home2'>Things are changing, but we're still here for you</p>
                </div>
                <div className='card-name'>
                    <p id='title-card-home2'>We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. <b className='fw-bold'>Waysbucks</b> Drivers is also availabe <br></br><br></br> Let's Order...</p>
                </div>
                <Landing />
                <img id='img-main' src={Rectangle} />

            </Card>
            <div className='f1'>
                  <p>Let's order</p>
            </div>
            <div className='f2 me-5 mb-5'>
              <Card className="DrinkList me-5 mb-3" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={drink1} />
                <Card.Body>
                  <Card.Title className='cardTitle mb-3'>Ice Coffe Green Tea</Card.Title>
                  <Card.Text className='cardPrice mb-2'>Rp.27.000</Card.Text>
                </Card.Body>
              </Card>
            </div>
      </div>
    </>
  )
}
