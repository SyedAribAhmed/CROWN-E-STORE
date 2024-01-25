import React from 'react'
import './CartDropdown.scss'

import CustomButton from '../custom-button/CustomButton'
import CartItem from '../cart-item/CartItem'

import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useNavigate } from 'react-router-dom'

import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'


const CartDropdown = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const selectCart = createStructuredSelector({
    cartItems: selectCartItems
  })
  const cartItems = useSelector((state) => selectCartItems(state))

  return (
    <div className='cart-dropdown'>
        <div className='cart-items'>
          {
            cartItems.length ? (
              cartItems.map( cartItem => (
                            <CartItem key = {cartItem.id} 
                                      item = {cartItem} /> 
                                    )
                          ) )
              : 
              (
                <span className='empty-message'>Your cart is empty!</span>
              )
            
          }
        </div>
        <CustomButton onClick = {() => {
          navigate('/checkout')
          dispatch(toggleCartHidden())
        }}>
          GO TO CHECKOUT
        </CustomButton>
    </div>
  )
}

export default CartDropdown