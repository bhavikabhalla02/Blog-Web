import React from 'react';
export default function PostCard(props){
    return(
        <>
            <hr />
            <div style={{"display":"flex","justifyContent":"space-between"}}>
               <div><img src={props.img} className="postImg"/></div>
               <div style={{"marginLeft":"2%"}}>
               <p className="postHeading">Catch waves with an adventure guide</p>
               <p style={{"fontSize":"small"}}>Travel <span style={{"color":"lightgray"}}>/Aug 21 2017</span></p></div>
               <div style={{"fontFamily":"sans-serif","fontSize":"xx-large","color":"lightgray","fontWeight":"bold"}}><p>{props.val}</p></div>
               </div>
        </>
    )
}