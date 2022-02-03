import React from 'react';

import './LeaveMessage.css'

const LeaveMessage = () => {
    return (
        <div className="leaveMessageContainer">

            <h1>LEAVE A MESSAGE</h1>

            <div className="messageContainer">

                <div className="nameAndEmail">

                    <div className="nameAndEmailContainer">

                        <h3>NAME</h3>

                        <input type="text" placeholder="Your name" />

                    </div>

                    <div className="nameAndEmailContainer">

                        <h3>E-MAIL</h3>

                        <input type="text" placeholder="@" />

                    </div>

                </div>

                <h3>MESSAGE</h3>

                <input className="msg" type="text" name="" id=""  placeholder='Your message'/>

            </div>

           <input type="button" value="SEND" className="btn" />
            
        </div>
    );
};

export default LeaveMessage;