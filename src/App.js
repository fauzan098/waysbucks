import React, { useState} from "react";
import { BrowserRouter as Router, Route, Routes, Link  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "../src/pages/main";
import AddProduct from "./pages/admin/addProduct";
import AddToping from "./pages/admin/addToping";
import IncomeTransaction from "./pages/admin/IncomeTransaction";
import DetailProduct from './customer/detailProduct'




function App() {
  return (
    <>
      <Main/>
    </>
  );
}

export default App