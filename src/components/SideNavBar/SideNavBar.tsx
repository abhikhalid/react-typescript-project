import React from 'react';

import './SideNavBar.css'

const SideNavBar = () => {
    return (
        <div className="sideNavBarContainer">

            <div className="navbar">

                <p style={{fontStyle:'bold', fontSize:'13px'}}>01 TOP</p>
                <p style={{fontStyle:'bold', fontSize:'13px'}}>02 ABOUT ME</p>
                <p style={{fontStyle:'bold', fontSize:'13px'}}>03 MY SERVICES</p>
                <p style={{fontStyle:'bold', fontSize:'13px'}}>04 SKILLS</p>
                <p style={{fontStyle:'bold', fontSize:'13px'}}>05 FACTS</p>
                <p style={{fontStyle:'bold', fontSize:'13px'}}>06 EXPERIENCES</p>
                <p style={{fontStyle:'bold', fontSize:'13px'}}>07 REFERENCES</p>
                <p style={{fontStyle:'bold', fontSize:'13px'}}>08 PROJECTS</p>
                <p style={{fontStyle:'bold', fontSize:'13px'}}>09 TESTIMONIALS</p>
                <p style={{fontStyle:'bold', fontSize:'13px'}}>10 CONTACT</p>


                <p>khalid.mamud@bjitgroup.com <br/> +420 652 887 351</p>

            </div>


            
        </div>
    );
};

export default SideNavBar;