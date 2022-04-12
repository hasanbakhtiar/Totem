import React from "react";
import { useCart } from "react-use-cart";

const Basket = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items, totalItems,
    updateItemQuantity, 
    removeItem,
    cartTotal,
    emptyCart
  } = useCart();

  if(isEmpty) return <h1 className="text-center">Your Basket is Empty</h1>

  return (
    <selection className='py-4 container'>
    <h2 className='text-center'>Total Price: ${cartTotal}</h2>
<div className="col-auto ms-auto d-flex align-items-center justify-content-center w-100">
    <div className="row d-flex justify-content-center">
        <div className="col-12">
            <h5>Cart({totalUniqueItems}) total Items:({totalItems})</h5>
            <table className='d-flex align-items-center justify-content-center table table-light table-hover m-0'>
                <tbody>
                    {items.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td><img src={item.img} style={{height:"6rem"}} alt="" /></td>
                                <td>{item.title}</td>
                                <td>{item.price}$</td>
                                <td>Quantity: ({item.quantity})</td>
                                <td>
                                <button className='btn btn-success ms-2' onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</button>
                                <button className='btn btn-success ms-2' onClick={()=>updateItemQuantity(item.id, item.quantity +1)}>+</button>
                                <button className="btn btn-danger ms-2" onClick={()=>{removeItem(item.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div className="mt-3 col-auto ms-auto d-flex align-items-center justify-content-center w-100">
            <button className='btn btn-danger' onClick={()=>{emptyCart()}}>Clear Cart</button>
        </div>
    </div>
</div>

</selection>
  );
};

export default Basket;
