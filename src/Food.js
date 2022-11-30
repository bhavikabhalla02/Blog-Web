import React from 'react';
import ArticleCard from './ArticleCard';
import TopPost from './TopPost';
import bg11 from "./bg11.jpg";
import bg12 from "./bg12.jpg";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Food(){
    return(
        <>
        <div id='bollywood-page'>
        <h3 style={{"fontFamily":"sans-serif"}}> <span style={{"borderBottom":"solid 2px orange"}}>Food</span></h3>
        <div id='bollywood-sec'>
           <div id='bollywood-sec1'>
           <ArticleCard src={bg11} articleHeading="Catch waves with an adventure guide" articleContent="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."/>
           <ArticleCard src={bg11} articleHeading="Catch waves with an adventure guide" articleContent="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."/>
           <ArticleCard src={bg11} articleHeading="Catch waves with an adventure guide" articleContent="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."/>
           <ArticleCard src={bg11} articleHeading="Catch waves with an adventure guide" articleContent="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."/>
           <ArticleCard src={bg11} articleHeading="Catch waves with an adventure guide" articleContent="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."/>
           <ArticleCard src={bg11} articleHeading="Catch waves with an adventure guide" articleContent="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."/>
           <ArticleCard src={bg11} articleHeading="Catch waves with an adventure guide" articleContent="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."/>

           </div>
           <div id='bollywood-sec2'>
               <TopPost src={bg12} img={bg11}/>
               <div id='advs'>
              <div> Advertisement</div>
               </div>
           </div>
           </div>
           <div style={{"display":"flex","marginTop":"4%","cursor":"pointer"}}>
            <div><ArrowDownwardIcon style={{"color":"red","marginTop":"2%"}} /></div>
            <div><span style={{"fontFamily":"sans-serif","color":"lightgray"}}> Load More</span></div>
            </div>
        </div>
        </>
    )
}