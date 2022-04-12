import React from 'react';
import { useCart } from 'react-use-cart';


const ProductItems = props => {
  const {addItem} = useCart();
  return (
    <div className="card col-12 col-sm-12 col-md-3" >
    <img src={props.shekil} className="card-img-top" width="300"  height="300" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{props.basliq}</h5>
      <p className="card-text">{props.izah}</p>
      <p className="card-text">{props.qiymet}$</p>
      <button onClick={()=>addItem(props.item)} className="btn btn-primary">Add To Card</button>
    </div>
  </div>
  )
}

export default ProductItems