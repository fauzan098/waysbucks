import React from 'react'
import { Table } from 'react-bootstrap';
import logowaysbuck from '../../assets/img/logowaysbuck.png'
// import '../../styles/addproduct.css'
import '../../styles/tableIncomeTransaction.css'
// import ProfilePhoto from '../../assets/img/profilephoto.png'
import Profile from '../../assets/img/profile.png'

export default function IncomeTransaction() {
  return (
    <>
    <div className='navbar ms-5 me-5 mt-3 mb-3'>
        <div className='ms-5 mt-2'>
          <img src={logowaysbuck} />
        </div>
        <div className=''>
          <img className='profile-photo float-right-end' src={Profile} />
        </div>
    </div>
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
          <tr>
            <td>1</td>
            <td>Sugeng No Pants</td>
            <td>Cileungsi</td>
            <td>16820</td>
            <td className='income'>69.000</td>
            <td style={{color : '#FF9900'}}>Waiting Approve</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Haris Gams</td>
            <td>Serang</td>
            <td>42111</td>
            <td className='income'>30.000</td>
            <td style={{color : '#78A85A'}}>Sucsess</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ucok</td>
            <td>Bekasi</td>
            <td>13450</td>
            <td className='income'>28.000</td>
            <td style={{color : '#E83939'}}>cancel</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Lae Tanjung balai</td>
            <td>Tanjung Balai</td>
            <td>21331</td>
            <td className='income'>30.000</td>
            <td style={{color : '#00D1FF'}}>On The Way</td>
          </tr>
        </tbody>
      </Table>
    </div>
    </>
  )
}
