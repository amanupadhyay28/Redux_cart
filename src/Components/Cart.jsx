import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {remove} from '../store/cartslice'

const Cart = () => {
  const product =useSelector(state=>state.cart);
  const dispatch=useDispatch();
  const handleRemove=(productId)=>{
dispatch(remove(productId));
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
      {
        product.map(product=>(
          <div className='cartCard' key={product.id}>
            <img src={product.image} alt=""/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className='btn'onClick={()=>handleRemove(product.id)}> Remove</button>
            </div>
        ))
      }
      </div>

      
    </div>
  )
}

export default Cart
