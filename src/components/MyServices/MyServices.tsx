import React from "react";

import "./MyServices.css";

const MyServices = () => {
  type serviceType = {
    serviceNumber: number;
    service1: string;
    service2: string;
    serviceDescription: string;
  };

  let myServices: serviceType[] = [];

  myServices.push(
    {
      serviceNumber: 1,
      service1: "Web",
      service2: "development",
      serviceDescription: `     Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
     non numquam reprehenderit sed commodi. Nostrum voluptatem ullam nisi
     perferendis magni rem quaerat, iste facere quos autem eaque
     consectetur fugiat dolore rerum amet alias id saepe tenetur quidem!
     Soluta, placeat maxime.`,
    },
    {
      serviceNumber: 2,
      service1: "Web",
      service2: "design",
      serviceDescription: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
    non numquam reprehenderit sed commodi. Nostrum voluptatem ullam nisi
    perferendis magni rem quaerat, iste facere quos autem eaque
    consectetur fugiat dolore rerum amet alias id saepe tenetur quidem!
    Soluta, placeat maxime.`,
    },
    {
      serviceNumber: 3,
      service1: "Web",
      service2: "consulting",
      serviceDescription: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
      non numquam reprehenderit sed commodi. Nostrum voluptatem ullam nisi
      perferendis magni rem quaerat, iste facere quos autem eaque
      consectetur fugiat dolore rerum amet alias id saepe tenetur quidem!
      Soluta, placeat maxime.`,
    }
  );

  return (
    <div className="myServicesContainer">
      <h1 id="myservices">MY SERVICES</h1>

      <div className="servicesContainer">
        <div className="service">
          <h1 className="serviceNumber">#{myServices[0].serviceNumber}</h1>

          <h1>
            {myServices[0].service1} <br /> {myServices[0].service2}
          </h1>

          <p>{myServices[0].serviceDescription}</p>
        </div>

        <div className="service">
          <h1 className="serviceNumber">#{myServices[1].serviceNumber}</h1>

          <h1>
            {myServices[1].service1} <br /> {myServices[1].service2}
          </h1>

          <p>{myServices[1].serviceDescription}</p>
        </div>

        <div className="service">
          <h1 className="serviceNumber">#{myServices[2].serviceNumber}</h1>

          <h1>
          {myServices[2].service1} <br />  {myServices[2].service2}
          </h1>

          <p>
          {myServices[2].serviceDescription}
          </p>
        </div>
      </div>

      <footer className="aboutMeFooter">
        03/10 NEXT CHAPTER <span className="arrow"> &#x2935; </span>
      </footer>
    </div>
  );
};

export default MyServices;
