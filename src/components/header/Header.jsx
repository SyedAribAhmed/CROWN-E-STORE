import React from 'react'
import './Header.scss'

import CartIcon from '../cart/CartIcon'
import CartDropdown from '../cart/CartDropdown'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils'
import { useSelector } from 'react-redux'
import {signOut} from 'firebase/auth'

import { selectCurrentUser } from '../../redux/user-reducer/user.selector'
import { selectCartHidden } from '../../redux/cart/cart.selectors'


const Header = () => {
  const navigate = useNavigate()

  const {selectUser, selectHidden } = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  })

  const currentUser = useSelector((state) => state.user.currentUser)
  const hidden = useSelector((state) => state.cart.hidden)

  const handleLogout = () =>{
    signOut(auth)
    .then(() => {  
      navigate('/signin')
    }) 
    .catch((error) => {
      console.log(error)
    })
  }
  
  return (
    <div className ='header'> 
        <NavLink to ='/' className = 'logo-container'>
            <Logo className = 'logo' />
        </NavLink>
        <div className ='options'>
            <NavLink className = 'option' to = '/shop' activeclassname='active'>SHOP</NavLink>
            <NavLink className = 'option' to = '/contact' activeclassname='active'>CONTACT</NavLink> 
            {
              currentUser ? 
              <div className = 'option' onClick={handleLogout} >SIGN OUT</div>
              :
              <NavLink className = 'option' to = '/signin'>SIGN IN</NavLink>
            }
            <CartIcon />
        </div>
        {
          hidden ? null : <CartDropdown/>
        }
    </div>
  )
}
export default Header