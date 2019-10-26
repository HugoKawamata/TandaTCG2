/* @flow */

import React from 'react';

// export type Props = {
//   sender: string,
//   recipient: string,
//   cardClass: string,
// }

function FeedItem(props) {
  return (
    <div className="feed-item">
      <p>{`${props.sender}`}</p>
    </div>
  );
}

export default FeedItem;
