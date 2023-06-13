import React, {useContext} from 'react'
import Logo from '../../assets/Logo.png'
import { Link } from 'react-router-dom'
import {DataContext} from "../../context/DataProvider"

const Header = () => {

  const value = useContext (DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito]= value.carrito

  //console.log(menu)

  const toogleMenu = ()=>{
    setMenu(!menu)
  }
  return (
    <header>
      
      <Link to="/">
      <div className="logo">
        <img src={Logo} alt="Logo" width="150" />
      </div>
      </Link>
      <ul>
        <li>
          
          <Link to="/"><h3>inicio</h3></Link>
        </li>
        <li>
          
          <Link to="/productos"><h3>productos</h3></Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  )
}

export default Header