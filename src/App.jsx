import React from 'react';
import Header from './componentes/header/Header';
import Productos from './componentes/productos/Productos';
import Inicio from "./componentes/Inicio/Inicio"
import { Routes, Route } from "react-router-dom";
import 'boxicons'
import {DataProvider} from "./context/DataProvider"
import Carrito from './componentes/carrito/Carrito.jsx'
import ProductoDetalle from './componentes/Productos/ProductoDetalle';






function App() {


  return (
    <DataProvider>
      <div className='App'>
        <Header/>
        <Carrito/>
        <Routes>
          <Route />
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<Productos/>} />
          <Route path="/producto/:id" element={<ProductoDetalle/>} />
       
       {/* <Productos/>
       <Paginas/> */}
       </Routes>
      </div>
      </DataProvider>
      
      
    
  )
}

export default App
