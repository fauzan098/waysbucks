import React from 'react'
import { Button,Form } from 'react-bootstrap';
import logowaysbuck from '../../assets/img/logowaysbuck.png'
import '../../styles/addproduct.css'
import ProfilePhoto from '../../assets/img/profilephoto.png'
import Profile from '../../assets/img/profile.png'
import drink1 from '../../assets/img/cleponcoffe.png'
import toping1 from '../../assets/img/toping/toping1.png'
import ikonupload from '../../assets/img/ikon-upload.png'

export default function AddToping() {
  return (
    <>
    <div className='navbar ms-5 me-5 mt-3 mb-3'>
        <div className='ms-5 mt-2'>
          <img src={logowaysbuck} />
        </div>
        <div className=''>
          <img className='profile-photo float-right-end rounded-circle py-2' src={Profile} />
        </div>
    </div>
      <div className='page-add-product justify-content-center'>
        <div className='formPageProduct'>
          <div className='title-product '>
            <h2>Toping</h2>
          </div>
              <div className='form-addProduct ps-4 py-4 '>
                  <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control className='inputProduct' type="text" placeholder="Name Toping" />
                      </Form.Group>
                      <Form.Group className=" mt-4" controlId="formBasicEmail">
                          <Form.Control className='inputProduct' type="text" placeholder="Price" />
                      </Form.Group>
                      <Form.Group className="mb-5" controlId="inputProduct">
                            <input
                            type="file"
                            id="upload"
                            name="image"
                            hidden
                            />
                            <label for="upload" className="label-file-add-product">
                                <img className="position-absolute" src={ikonupload}/>
                            </label>
                            <Form.Control className="inputProduct" type="text" placeholder="Photo Product" />
                        </Form.Group>                     
                      <Button className='button-addProduct justify-content-center mt-3' variant="danger" type="submit">
                          Add Toping
                      </Button>
                  </Form>
              </div>
        </div>
            <div className='imgProduct ms-5'>
                <img src={toping1}/>
            </div>
      </div>
    </>
  )
}
