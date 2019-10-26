import React from "react";
import { Link } from "react-router-dom";

// type Props = {
//   percentComplete: number,
//   multiplier: number,
// }

export default (props) => (
    <div className="card-progress-wrapper">
      <div className="section-title">
        Progress until next card drop
      </div>
      <div className="card-progress-bar-wrapper">
        <div className="filler" style={{ width: `${props.percentage}%` }} />
      </div>
      <div className="progress-text-wrapper">
        <div className="percentage">
          {props.percentage}%
        </div>
        <div className="multiplier">
          {props.multiplier}x earn rate
        </div>
      </div>
    </div>
);