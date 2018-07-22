import React from 'react';

// Slider for the featured Articles
import Slider from 'react-slick';
// Link for the routres
import { Link } from 'react-router-dom';
// Using module CSS
import styles from './slider_templates.css'

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
            <div className={styles.article}>
              <img className={styles.image} alt="article" src={`../images/articles/${article.image}`}/>
              <Link className={styles.link} to={`article/${article.id}`}>
                <div className={styles.linka}>
                  {article.title}
                </div>
              </Link>
            </div>
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