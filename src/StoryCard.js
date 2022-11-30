import React from 'react';

export default function StoryCard(props){
    return(
        <>
            <div className='card' id={props.id}>
               <div className='cardHeading'>
                Catch waves with an adventure guide
               </div>
               <div className='cardContent'>
                Gujrat is vastly underrated and it is a mystry to us why the region is not more well-known as a tourist destination. It has a plethora of temples and places.Gujrat is vastly underrated and it is a mystry to us why the region is not more well-known as a tourist destination. It has a plethora of temples and places.
               </div>
               <div className='cardFooter'>
                   {props.footerVal} <span style={{"color":"lightgray"}}>/Today At 11:54</span>
               </div>
            </div>
        </>
    )
}