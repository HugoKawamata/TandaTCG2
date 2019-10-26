import React from "react";
import { Link } from "react-router-dom";
import Feed from './Feed'
import CardProgress from "./CardProgress"
import Collection from "./Collection"

// type Props = {
// }

export default (props) => (
    <div className="main-wrapper bg-primary-color">
      <div className="left-side">
        <Feed 
          feedItems={props.feedItems}
        />
      </div>
      <div className="right-side">
        <div className="user-info-wrapper">
          <CardProgress percentage={props.percentage} multiplier={props.multiplier} />
          <Collection collection={props.collection} />
        </div>
      </div>
    </div>
);