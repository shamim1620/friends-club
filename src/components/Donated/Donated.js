import React from 'react';
import('./Donated.css');

const Donated = (props) => {
    return (
        <div>
            <ul>
                <li>{props.friend}</li>
            </ul>

        </div>
    );
};

export default Donated;