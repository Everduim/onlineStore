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
        {/* <div className='menu'>
          <box-icon name="menu"></box-icon>
        </div> */}
        <a href='#'>
            <div className='logo'>
            <img src={Logo} alt="logo" width="150" />
            </div>
        </a>
        <ul>
            
            <li>
                <Link to='/'>INICIO
                {/* <a href='#'>INICIO</a> */}
                </Link>   

            </li>
            
            
            <li>
                <Link to='/productos'>PRODUCTOS
                
                </Link> 
                
            </li>  
             
        </ul>
        <div className='cart' onClick={toogleMenu} >
            <box-icon name="cart"></box-icon>
            
            <span className='item__total'>{carrito.length}</span>
        </div>

    </header>
  )
}

export default Header