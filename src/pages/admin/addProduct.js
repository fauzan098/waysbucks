import React from 'react'
import { Button,Form } from 'react-bootstrap';

import NavbarAdmin from './navbarAdmin';


import '../../styles/addproduct.css'
import drink1 from '../../assets/img/cleponcoffe.png'
import ikonupload from '../../assets/img/ikon-upload.png'

export default function addProduct() {
  return (
    <>
        <NavbarAdmin/>
      <div className='page-add-product justify-content-center'>
        <div className='formPageProduct'>
          <div className='title-product '>
            <h2>Product</h2>
          </div>
              <div className='form-addProduct ps-4 py-4 '>
                  <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control className='inputProduct' type="text" placeholder="Name Product" />
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
                          Add Product
                      </Button>
                  </Form>
              </div>
        </div>
            <div className='imgProduct ms-5'>
                <img src={drink1}/>
            </div>
      </div>
    </>
  )
}
