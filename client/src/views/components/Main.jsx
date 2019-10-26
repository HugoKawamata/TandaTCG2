import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import Feed from './Feed'
import CardProgress from "./CardProgress"
import Collection from "./Collection"

// type Props = {
// }

export default (props) => (
  <div>
    <AppBar >
      <Toolbar>
        <IconButton edge="start" className="menuButton" color="inherit" aria-label="menu">
          {/* <MenuIcon /> */}
        </IconButton>
        <Typography variant="h6" className="title">
          TandaTCG
        </Typography>
      </Toolbar>
    </AppBar>
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
  </div>
);