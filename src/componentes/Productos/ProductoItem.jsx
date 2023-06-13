import React, {useContext} from 'react'
//import IMG from "../../assets/img01.jpg";
import { Link } from 'react-router-dom';
import { DataContext } from "../../context/DataProvider"


const ProductoItem = ({

  id,
  title,
  price,
  image,
  category,
  //cantidad
}) => {

  const value = useContext(DataContext);
  const addCarrito = value.addCarrito

  //console.log(image)
  return (
    <div className="producto">
          <Link to={`/producto/${id}`}>
            <div className="producto__img">
              <img src={image} alt={title} />
            </div>
            </Link>
          <div className="producto__footer">
            <h1>{title}</h1>
            <p>{category}</p>
            <div className="price">{price}€</div>
          </div>
          <div className="buttom">
            <button className="btn" onClick={() => addCarrito(id)}>Añadir al carrito</button>
            <div>
              <Link to={`/producto/${id}`} className="btn">
                Vista
              </Link>
            </div>
          </div>
          </div>
  )
}

export default ProductoItem