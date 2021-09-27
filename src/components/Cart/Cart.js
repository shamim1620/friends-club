import React from 'react';
import('./Cart.css')

const Cart = (props) => {
    console.log(props.cart);
    const { cart } = props;
    let total = 0;
    for (const friend of cart) {
        total = total + friend.donation;
    }
    return (
        <div>
            <div className="top-section">
                <h5><i class="fas fa-user"></i>Friend doneted: {props.cart.length}</h5>
                <h5>Total Donation:$ {total} </h5>
            </div>
            <div>
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Cart;