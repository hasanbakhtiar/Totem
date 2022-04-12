import React from 'react';
import data from '../data/data';
import ProductItems from './ProductItems';

const Product = () => {
  return (
    <div className='container'>
        <div className="row">
        {data.productData.map((item,index)=>{
            return(
                <ProductItems 
                shekil = {item.img}
                basliq={item.title}
                izah = {item.desc}
                qiymet = {item.price}
                item={item}
                key={index}
                
                />
            )
        })}
 
        </div>
    </div>
  )
}

export default Product