import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Profile from '../Profile/Profile';
import './Friends.css';

const Friends = () => {
    const [friends, setFriend] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    const addToCart = friend => {
        const newCart = [...cart, friend];
        setCart(newCart);
    };

    return (
        <div className="friend-container container">
            <div className="friend-profile row row-cols-md-3 g-4">
                {
                    friends.map(friend => <Profile
                        friend={friend}
                        key={friend.id}
                        addToCart={addToCart}
                    ></Profile>)
                }

            </div>
            <div className="donation-total">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};
export default Friends;