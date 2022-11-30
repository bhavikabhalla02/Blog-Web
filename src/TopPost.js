import React from 'react';
import PostCard from './PostCard';
export default function TopPost(props){
    return(
        <>
    <div id="post-sec">
               <h3 style={{"fontFamily":"sans-serif","marginLeft":"2%","marginTop":"16%"}}> <span style={{"borderBottom":"solid 2px orange"}}>Top </span>Posts</h3>
               <img src={props.src} id="post-img"/>
               <div style={{"display":"flex","justifyContent":"space-between"}}>
               <div>
               <p className='postHeading'>Catch waves with an adventure guide</p>
               <p>Travel <span style={{"color":"lightgray"}}>/Aug 21 2017</span></p></div>
               <div style={{"fontFamily":"sans-serif","fontSize":"xx-large","color":"lightgray","fontWeight":"bold"}}><p>1</p></div>
               </div>
               <PostCard val="2" img={props.img}/>
               <PostCard val="3" img={props.img}/>
               <PostCard val="4" img={props.img}/>
    </div>
    </>
    )
}