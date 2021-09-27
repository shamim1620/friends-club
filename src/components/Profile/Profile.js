import React from 'react';
import('./Profile.css');

const Profile = (props) => {
    console.log(props.friend.occupation);
    const { name, age, occupation, homeDistrict, donation, img } = props.friend;
    return (
        <div >

            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Age: {age}</p>
                        <p className="card-text">Occupation: {occupation}</p>
                        <p className="card-text">Home District: {homeDistrict}</p>
                        <p className="card-text">Donate: ${donation}</p>
                        <h3 className="d-flex justify-content-evenly"><i className="fab fa-facebook"></i><i className="fab fa-twitter-square"></i></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;