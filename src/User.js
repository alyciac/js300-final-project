import React from 'react';

function UserComponent() {
    return (
        <div className="user-comppnenet">
            <div className="user-image">
            </div>
            <ul className="user-content">
                <li><b>Username:</b></li>
                <li><b>Location:</b></li>
                <li><b>Email:</b></li>
                <li>
                    <b>Produce to Swap:</b>
                    <ul>
                        <li>Veggie</li>
                        <li>Veggie</li>
                        <li>Veggie</li>
                    </ul>
                </li>
                <li>
                    Looking to Swap for these:
                    <ul>
                        <li>Veggie</li>
                        <li>Veggie</li>
                        <li>Veggie</li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default UserComponent;