import React from "react";

import "./Facts.css";

const Facts = () => {
  type facts = {
    factName: string;
    factNumber: number;
  };

  let listoffacts: facts[] = [];

  listoffacts.push(
    {
      factName: "COFFES / PER DAY",
      factNumber: 6,
    },
    {
      factName: "LAUNCHED WEBSITES",
      factNumber: 64,
    },
    {
      factName: "LINES OF CODE",
      factNumber: 120000,
    },
    {
      factName: "HAPPY CLIENTS",
      factNumber: 160,
    }
  );

  return (
    <div className="factsContainer">
      <h1>FACTS</h1>

      <div className="facts">
        <div className="singleFacts">
          <h3>{listoffacts[0].factName}</h3>

          <h1>{listoffacts[0].factNumber}</h1>
        </div>
        <div className="singleFacts">
          <h3>{listoffacts[1].factName}</h3>

          <h1>{listoffacts[1].factNumber}</h1>
        </div>

        <div className="singleFacts">
          <h3>{listoffacts[2].factName}</h3>

          <h1>{listoffacts[2].factNumber}</h1>
        </div>

        <div className="singleFacts">
          <h3>{listoffacts[3].factName}</h3>

          <h1>{listoffacts[3].factNumber}</h1>
        </div>
      </div>

      <footer className="aboutMeFooter abc">
        05/10 NEXT CHAPTER <span className="arrow"> &#x2935; </span>
      </footer>
    </div>
  );
};

export default Facts;
