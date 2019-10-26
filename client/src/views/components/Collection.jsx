import React from "react";
import { Link } from "react-router-dom";

// type Props = {
//   percentComplete: number,
//   multiplier: number,
// }

export default (props) => (
    <div className="collection-wrapper">
      {props.collection.map((card) => (
        <div className="card-wrapper">
          <img className="card" src={card.image}/>
          <p className="card-charges">
            Charges remaining: {card.charges}
          </p>
        </div>
      ))}
      <div className="">
        <div className="filler" style={{ width: `${props.percentage}%` }} />
      </div>
      <div className="text-wrapper">
        <div className="percentage">
          {props.percentComplete}%
        </div>
        <div className="multiplier">
          {props.multiplier}x
        </div>
      </div>
    </div>
);