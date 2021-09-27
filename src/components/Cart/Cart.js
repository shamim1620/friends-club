import React from 'react';
import('./Cart.css')

const Cart = (props) => {
    // console.log(props);
    const { cart } = props;
    let total = 0;
    for (const friend of cart) {
        total = total + friend.donation;

    }
    return (
        <div>
            <div className="top-section">
                <h5><i class="fas fa-user"></i>Friend doneted: {cart.length}</h5>
                <h5>Total Donation:$ {total} </h5>
            </div>

        </div>

    );
};

export default Cart;