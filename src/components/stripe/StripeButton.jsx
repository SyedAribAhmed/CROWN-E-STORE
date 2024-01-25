import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import crown from '../../assets/crown.svg'

const StripeButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51OX5XTSF51JAYvqWCeOD6UpMLE0fpIgK4io4sG5ZylaLB1nSzFwWJanqJ7z9cQUfBUsehrBO7WUSeCxGRkaLAe5C00uCg8OM5D'
    let onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
    <StripeCheckout 
    label='Pay Now' 
    name='CROWN CLOTHING Ltd.' 
    billingAddress
    shippingAddress
    image={crown}
    description={`Your total amount is $${price}`} 
    amount={priceForStripe} 
    panelLabel='Pay Now' 
    token={onToken} 
    currency='INR' 
    stripeKey={publishableKey}/>
  )
}

export default StripeButton