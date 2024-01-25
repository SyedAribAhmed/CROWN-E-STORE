import React from "react";
import './Checkout.scss'

import { createStructuredSelector } from "reselect";
import { useSelector } from "react-redux";

import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import CheckoutItem from "./CheckoutItem";

import StripeButton from "../../components/stripe/StripeButton";

const Checkout = () => {

    const selectItems = createStructuredSelector({
        cartItems: selectCartItems, 
        total: selectCartTotal
    });
    const cartItems = useSelector((state) => selectCartItems(state))
    const total = useSelector((state) => selectCartTotal(state))

    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/> )
            }
            <div className="total">TOTAL : &#8377;{total}</div>
            <div className="test-warning">
            Please use the following test credit card for paymnets
            <br/>
            <br/>
            4242 4242 4242 4242 - Exp: 12/34 - CVV: 567 </div>
            <StripeButton price={total}/>
        </div>
    )
}

export default Checkout