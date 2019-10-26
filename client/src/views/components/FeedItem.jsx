/* @flow */
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    width: 380,
    marginBottom: 20,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'top'
  },
  timestamp: {
    display: 'flex',
    backgroundColor: '#a2b9bc'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    display: 'flex',
    width: 200,
  },
}));

function FeedItem(props) {
  const classes = useStyles();
  const theme = useTheme();

  

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={props.image}
        title="cardImage"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="subtitle1" variant="subtitle1">
            {`${props.user} used ${props.cardClass} on ${props.target}`}
          </Typography>
          <div className={classes.timestamp}>
          <Typography component="subtitle1" variant="subtitle1">
            {`${props.time}`}
          </Typography>
          </div>
          
        </CardContent>
      </div>
      
    </Card>
  );
}
export default FeedItem;