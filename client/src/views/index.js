import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string';
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
      backgroundColor: '#f2f2f2',
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
    cardClass: 'Charlie, the Sandwich King',
  }]

  const cards = [{
    image: "https://imgur.com/Piw45ru.png",
    charges: 2,
  }, {
    image: "https://imgur.com/vrigUJV.png",
    charges: 3,
  }, {
    image: "https://imgur.com/LtZAQm3.png",
    charges: 3,
  }]
  
  return (
      <div style={{height: '100%'}}>
          <div style={{
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
          }}>
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
