import React from "react";
import { factory } from "typescript";

import "./Contact.css";

const Contact = () => {

  let address : {

      streetInfo: string,
      cityName: string,
      postalCode: string,
      email: string,
      phoneNumber: string,
      social: {
        facebook: string,
        linkdin: string,
        twitter: string
      }
  }

  address={
    streetInfo: 'A block, Road- 5 House no : 191/G Bashundhara R/A, Dhaka',
    cityName: 'Dhaka',
    postalCode: '1229',
    email: 'khalid.mahmud@bjitgroup.com',
    phoneNumber: '+8801629069673',
    social:{
      facebook: "https://www.facebook.com/abhi.khan.94009/",
      linkdin: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEIbxfVj2u2igAAAX6_sT24zGREjGrKEaYAZjJXigYf-TNvYXyhP9-Qk7PkpylQhuCtI9KoQU94Ay5BMiAXdkqUnxh_q1BqzgVzCHu0URtk2VdMxsHpsDvHQPaH2ynlSqFMk08=&originalReferer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmd-khalid-mahmud-864821136%2F",
      twitter: 'https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'
    }
  }


  return (
    <div className="contactContainer">
      <h1>CONTACT</h1>

      <div className="contacts">
        <div className="singleContact">
          <p>STAY IN TOUCH</p>

          <a
            href="https://www.google.com"
            style={{ textDecoration: "none", color: "black" }}
          >
            <p className="link" style={{ fontSize: "20px" }}>
              {address.email}
            </p>
          </a>

          <p className="link" style={{ fontSize: "20px" }}>
            {address.phoneNumber}
          </p>
        </div>
        <div className="singleContact">
          <p>SOCIAL</p>

          <a
            href={address.social.facebook}
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            <p className="link" style={{ fontSize: "20px" }}>
              Facebook
            </p>
          </a>

          <a
            href={address.social.linkdin}
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            <p className="link" style={{ fontSize: "20px" }}>
              LinekdiIn
            </p>
          </a>

        
        </div>
        <div className="singleContact">
          <p>ADDRESS</p>

          <p style={{ fontSize: "20px" }}>{address.streetInfo}</p>
          <p style={{ fontSize: "20px" }}>{address.cityName}</p>
          <p style={{ fontSize: "20px" }}>{address.postalCode}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
