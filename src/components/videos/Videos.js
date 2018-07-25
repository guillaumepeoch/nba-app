import React from 'react';

import VideosList from '../widgets/videos_list/VideosList';

const Videos = function(){
  return(
    <div>
      <VideosList
        type="card"
        tittle={false}
        loadMore={true}
        start={0}
        amount={8}
      />
    </div>
  );
}

export default Videos;
