import React, {useState} from 'react'
import { Table, Button, Modal } from 'react-bootstrap';
import '../../styles/tableIncomeTransaction.css'
import Icecoffegreentea from '../../assets/img/icecoffegreentea.png'
import Logowaysbuck from '../../assets/img/logowaysbuck.png'
import Qrcode from '../../assets/img/qrcode.png'
import NavbarAdmin from "../admin/navbarAdmin";
import DataTransaction from "../../components/DataDummy/DataincomTransaction";

export default function IncomeTransaction() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const[datas] = useState(DataTransaction)
  console.log(datas);

  return (
    <>
        <Modal show={show} onHide={handleClose}>
          <div className=''>
                <div className='detailTransaction py-2 px-2 d-flex'>
                    <div className=''>
                        <div className='d-flex justify-content-center'>
                            <div className='justify-content-center'>
                              <p className='float-center'>
                                <img className='img-drink justify-content-center' src={Icecoffegreentea} />
                              </p>
                            </div>
                            <div className='ms-4'>
                                <h4 style={{color :"#BD0707"}}>Ice coffe palm sugar</h4>
                                <p className='text-danger'> <strong>Saturday</strong>, 5 march 2020</p>
                                <p className='text-danger'> Toping &nbsp; : Bill Berry Boba, Bubble Tea Gelatin</p>
                                <p className='text-danger'>Price : Rp.33.000</p>
                            </div>
                        </div>
                    </div>
                    <div className='ms-4'>
                        <div className='mb-2'>
                            <img src={Logowaysbuck} style={{
                              width: '48.04px',
                              height: '47.75px'
                            }} />
                        </div>
                            <img src={Qrcode} className='mt-2' style={{
                              height: '74px;',
                              width: '74px'
                            }} />
                        <div className='mt-2 ms-2'>
                            <span>on the wayt</span>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    <NavbarAdmin/>
    <div className='title-product mb-5 mt-5'>
        <h2>Income Transaction</h2>
    </div>
    <div className='table-incomeTransaction '>
      <Table  bordered >
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Post Code</th>
            <th>Income</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {datas.map(data => (
          <tr>
            <td>{data.no}</td>
            <td>{data.name}</td>
            <td>{data.address}</td>
            <td>{data.postcode}</td>
            <td className='income'><p onClick={handleShow} style={{cursor:'pointer'}}>{data.income}</p></td>
            <td className={`status-transaction-${data.status}`}>{data.status}</td>
          </tr>
          ))}
        </tbody>
      </Table>
    </div>
    </>
  )
}
