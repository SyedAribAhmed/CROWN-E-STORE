import React from 'react'
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg' 

import { toggleCartHidden } from '../../redux/cart/cart.actions'

import './CartIcon.scss'
import { useDispatch, useSelector } from 'react-redux' 
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

const CartIcon = () => {
  
  const cartHidden = useSelector(state => state.cartHidden)
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(toggleCartHidden())
  } 

  const selectCartIcon = createStructuredSelector({
    itemCount: selectCartItemsCount
  })
  const itemCount = useSelector((state) => selectCartItemsCount(state))
  
  return (
    <div className='cart-icon' onClick={toggleCart}>
      <ShoppingBag className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
  )
}

export default CartIcon