import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Donated from '../Donated/Donated';
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
                {
                    cart.map(friend => <Donated friend={friend.name}></Donated>)
                }

            </div>
        </div>
    );
};
export default Friends;