import React, { useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "../src/pages/main";
import AddProduct from "./pages/admin/addProduct";
import AddToping from "./pages/admin/addToping";
import NavbarAdmin from "./pages/admin/navbarAdmin";
import IncomeTransaction from "./pages/admin/IncomeTransaction";
import DetailProduct from './customer/detailProduct'
import DataDrink from "./components/DataDummy/DataDrink";
import NavbarUser from "../src/customer/navbarUser";
import Login from "./pages/login";





function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main/>}/>
        <Route exact path='/add-drink' element={<AddProduct/>}/>
        <Route exact path='/AddToping' element={<AddToping/>}/>
        <Route exact path='/Login' element={<Login/>}/>
        <Route exact path='/admin' element={<IncomeTransaction/>}/>
        <Route exact path='/detail-drink/:id' element={< DetailProduct data ={DataDrink}/>}/>
     </Routes>
    </>
  );
}

export default App