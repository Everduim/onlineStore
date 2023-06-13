import React,{useContext, useState, useEffect} from 'react'
import { DataContext } from '../../context/DataProvider'
import {useParams} from "react-router-dom"



const ProductoDetalle = () => {
    const value = useContext(DataContext)
    const [productos]=value.productos;
    const params = useParams();
    const [detalle, setDetalle] = useState([])

    const [url, setUrl] = useState(0)
    const [images, setImages] = useState ('')


    useEffect(() => {
        productos.forEach(producto =>{
            //console.log(producto.id, parseInt(params.id))
            if(producto.id === parseInt(params.id)){
                setDetalle(producto)
                setUrl(0)

            }
        })
    },[params.id, productos])

    useEffect(() =>{
        const values =`${detalle.img1}${url}${detalle.img2}`;
        setImages(values)

    },[url, params.id])

    const handleInput = e =>{
        const number = e.target.value.toString().padStart(2, '01')
        setUrl(number)
        //console.log(number)
    }

   //console.log(detalle)
  return (
    <>
    {
        <div className="detalles">
            <h2>{detalle.title}</h2>
            <p className='price'>${detalle.price}</p>
            <div className="grid">
                <p className='nuevo'>Nuevo</p>
                <div className="size">
                    <select placeholder='Tamaño'>
                        <option value="1">1</option>
                        <option value="1">2</option>
                        <option value="1">3</option>
                        <option value="1">4</option>
                        <option value="1">5</option>
                        <option value="1">6</option>
                        <option value="1">7</option>
                        <option value="1">8</option>
                        <option value="1">9</option>
                    </select>
                    <p>Tamaño</p>
                </div>
            </div>
            <button>Añadir al carrito</button>
            <img src={detalle.image} alt={detalle.title} />
            <input type="range" min="1" max="36" step="1" value={url} onChange={handleInput} />
            <div className="description">
                <p><b>Description: </b>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestias qui magnam libero quos dignissimos quae quo dolor! Sint labore, 
                exercitationem aliquam voluptatibus laudantium excepturi autem repellendus 
                inventore in esse neque. <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Molestias qui magnam libero quos dignissimos quae quo dolor! Sint labore, 
                exercitationem aliquam voluptatibus laudantium excepturi autem repellendus 
                inventore in esse neque?.
                </p>
            </div>
        </div>
    }

        
    </>
  )
}

export default ProductoDetalle