import React from "react";
import { Link } from "react-router-dom";

// type Props = {
//   percentComplete: number,
//   multiplier: number,
// }

export default (props) => (
    <div className="collection-section-wrapper">
      <div className="section-title">
        Collection
      </div>
      <div className="collection-wrapper">
        {props.collection.map((card) => (
          <div className="card-wrapper">
            <img className="card" src={card.image}/>
            <p className="card-charges">
              Charges remaining: {card.charges}
            </p>
          </div>
        ))}
      </div>
    </div>
);