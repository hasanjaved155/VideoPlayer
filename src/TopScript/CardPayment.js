
import React from 'react'

const CardPayment = ({ amount, img, checkoutHandler }) => {
    return (
        <div>
            <img src={img} style={{ boxSizing: '64', objectFit: "cover" }} />
            <h4>₹{amount}</h4>
            <button onClick={() => checkoutHandler(amount)}>Buy Now</button>
        </div>
    )
}

export default CardPayment