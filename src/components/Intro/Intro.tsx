import React from 'react';

import abhi from '../../../src/abhi.jpg'

import "./Intro.css"

const Intro = () => {

    //object

    let intro: {
        firstName: string,
        lastName: string,
        designation: string
    }

    intro = {
        firstName: 'Khalid',
        lastName: 'Mahmud',
        designation: 'Software Engineer'
    }


    return (
        <div className="introContainer">

           <img className="profileImage" src={abhi} alt="" />

           <h1 className="title">{intro.firstName} <br/> {intro.lastName}</h1>

      

           <p id="freelance">{intro.designation}</p>

           <footer className="aboutMeFooter">01/10 NEXT CHAPTER  <span className="arrow"> &#x2935; </span></footer>
                                       
        </div>
    );
};

export default Intro;