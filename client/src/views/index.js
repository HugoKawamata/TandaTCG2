import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { signIn } from './actions';
import { List, ListItem as Item, Divider } from '@material-ui/core'
import Main from './components/Main'

// Import Components
import ProfileCard from './components/profileCard'
import ConnectionCard from './components/connectionCard';

const HomePage = ({ signIn, token, currentConnection, connections }) => {
  const styles = {
    cardContainer: { 
      width: '16%', 
      height: '100%', 
      alignItems: 'center', 
      justifyContent: 'center', 
      display: 'flex', 
      minWidth: '250px'
    }, 
    signinButton: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%'
    }
  }
  


  const feedItems = [{
    user: 'Hugo Kawamata',
    target: 'Rohan Laidlaw',
    cardClass: 'Peter Greenwood, Ph.D',
    image: 'https://i.imgur.com/mTvWAzt.png',
    time: "16:45 Today",
  },{
    user: 'Lachlan Young',
    target: 'Hugo Kawamata',
    cardClass: 'Charlie, the Sandwich King',
    image: 'https://i.imgur.com/Piw45ru.png',
    time: "11:40 Yesterday",
  },{
    user: 'Ryan Johnson',
    target: 'Rohan Laidlaw',
    cardClass: 'Peter Greenwood',
    image: "https://i.imgur.com/mTvWAzt.png",
    time: "13:20 Today",
  },{
    user: 'Rohan Laidlaw',
    target: 'Hugo Kawamata',
    cardClass: 'Daniel Gilchrist',
    image: "https://i.imgur.com/LtZAQm3.png",
    time: "9:20 Yesterday",
  }]

  const cards = [{
    image: "https://i.imgur.com/Piw45ru.png",
    charges: 2,
  }, {
    image: "https://i.imgur.com/vrigUJV.png",
    charges: 3,
  }, {
    image: "https://i.imgur.com/mTvWAzt.png",
    charges: 6,
  }, {
    image: "https://i.imgur.com/uD4IzZN.png",
    charges: 6,
  }, {
    image: "https://i.imgur.com/LtZAQm3.png",
    charges: 3,
  }]
  
  return (
      <div style={{height: '100%'}}>
          <div style={{
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              width: "100%"
          }}>
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
            <Main
              feedItems={feedItems}
              collection={cards}
              percentage={50}
              multiplier={1.8}
            />
          </div>
      } </div>
  );
}

export default (HomePage);
