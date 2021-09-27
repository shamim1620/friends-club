import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import './Friends.css';

const Friends = () => {
    const [friends, setFriend] = useState([]);
    useEffect(() => {
        fetch('./data.JSON')
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div className="friend-container container">
            <div className="friend-profile row row-cols-md-3 g-4">
                {
                    friends.map(friend => <Profile
                        friend={friend}
                        key={friend.id}
                    ></Profile>)
                }

            </div>
            <div className="donation-total">
                <h5><i class="fas fa-user"></i>Friend doneted: <span>0</span></h5>
                <h5>Total Donation:$ <span>0</span> </h5>
            </div>
        </div>
    );
};
export default Friends;