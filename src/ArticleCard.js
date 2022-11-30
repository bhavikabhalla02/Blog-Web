import React from 'react';

export default function ArticleCard(props){
    return(
        <>
          <hr />
          <div className='ArticleBox'>
          <div>
          <img src={props.src} className='article-img'/>
          </div>
          <div>
          <div className='article-heading'>{props.articleHeading}</div>
          <div className='article-content'>{props.articleContent}</div>
          </div>
          </div>
        </>
    )
}