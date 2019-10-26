/* @flow */

import React from 'react';

function FeedItem(props) {
  return (
    <div className="feed-item">
      <p>{`${props.user}`}</p>
    </div>
  );
}

export default FeedItem;
