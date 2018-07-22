import React from 'react';

// Slider
import Slider from 'react-slick';

const SliderTemplates = function(props){

  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  };
  let template = null;

  switch(props.type){

    case 'featured':
      template = props.data.map(function(article){
        return(
          <div key={article.id}>
            {article.title}
          </div>
        );
      });
    break;

    default:
     template = null;
  }



  return(
    <Slider {...settings}>
        {template}
    </Slider>
  );
};

export default SliderTemplates;
