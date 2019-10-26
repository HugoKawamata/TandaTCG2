import React from 'react';
import FeedItem from './FeedItem';

// type Props = {
//   feedItems: Array<FeedItemProps>
// }

function Feed(props) {
  return (
    <div className="feed">
      <header className="feed-heading">
        Feed
      </header>
      {
        props.feedItems.map((item) => {
          return <FeedItem {...item} />
        })
      }
    </div>
  );
}

export default Feed;
