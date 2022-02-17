import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Cabecera from './components/index.html/Cabecera'
import Productos from './components/index.html/Productos';
import Footer from './components/index.html/Footer';
// import Shop from './components/shop.html/Shop';
import Carrito from './components/Carrito';

function App() {
  return (
    <div>
      <Cabecera />
      <Routes>
        <Route path="/" element={<Productos />} />
        {/* <Route path="/shop.html" element={<Shop />} /> */}
        <Route path="/cart.html" element={<Carrito />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
