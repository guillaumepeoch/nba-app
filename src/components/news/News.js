import React from 'react';

import NewsList from '../widgets/news_list/NewsList';

const News = function(){
  return(
    <div>
      <NewsList
        start={0}
        amount={8}
      />
    </div>
  );
}

export default News;
