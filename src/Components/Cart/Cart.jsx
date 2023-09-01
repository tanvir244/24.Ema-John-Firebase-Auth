import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
 
    // Product Price 
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }
    // Shipping Cost 
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99
    }
    else if(total > 0){
        shipping = 12.99;
    }
    // Tax 
    const tax = total / 10;
    const grandTotal = total + shipping + tax;

    const formatNumber = num => {
        const precition = num.toFixed(2);
        return Number(precition);
    }

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h4>Items orderd : {cart.length}</h4>
            <p>Product Price : <b>${formatNumber(total)}</b></p>
            <p>Shipping Cost : <b>${formatNumber(shipping)}</b></p>
            <p>Tax : <b>${formatNumber(tax)}</b></p>
            <h3>Order Total : <b>${formatNumber(grandTotal)}</b></h3>
            {
                props.children
            }
        </div>
    );
};

export default Cart;