import React from 'react';

export default function Card(props){
   return(
    <>
        <div className='card'>
            <img src={props.src}/>
            <div className='card-heading'>{props.heading}</div>
            <div className='card-content'>{props.content}</div>
            
        </div>
    </>
   )
}