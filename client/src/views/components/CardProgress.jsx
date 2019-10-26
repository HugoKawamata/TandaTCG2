import React from "react";
import { Link } from "react-router-dom";

// type Props = {
//   percentComplete: number,
//   multiplier: number,
// }

export default (props) => (
    <div className="card-progress-wrapper">
      <div className="card-progress-bar-wrapper">
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