import React, {useState, useEffect, createContext } from "react";
import Data from '../Data.jsx';
export const DataContext = createContext();



export const DataProvider = (props) => {
    const [productos, sertProductos] = useState([])
    const [menu, setMenu] =useState(false);
    const[carrito, setCarrito]= useState([]);
    const [total,setTotal] =useState(0);

    useEffect(() =>{
        const producto = Data.items
        if(producto){
            sertProductos(producto)
        }else{
            sertProductos([])
        }
        
    },[])

    const addCarrito = (id) =>{
        const check = carrito.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(producto =>{
                return producto.id ===id
            })

            setCarrito([...carrito, ...data])
        }else{
            alert('El producto se ha añadido al carrito')
        }
        }

        useEffect(() =>{
            //estoy se parsea porque lo que esta dentro del localstorage es un string
            const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
            if(dataCarrito){
                setCarrito(dataCarrito)

            }

        },[])
        useEffect(() =>{
            localStorage.setItem('dataCarrito',JSON.stringify(carrito))

        },[carrito])

        useEffect(() => {
          const getTotal = () =>{
            const res = carrito.reduce((prev, item) =>{
                return prev + (item.price* item.cantidad)
            },0)
            setTotal(res)

          }
        
          getTotal()
        },[carrito])
        
    

      const value = {
        productos : [productos],
        menu:[menu, setMenu],
        addCarrito: addCarrito,
        carrito:[carrito, setCarrito],
        total: [total, setTotal]
    }
    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
}