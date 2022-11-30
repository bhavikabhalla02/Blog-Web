import React from 'react';
import ArticleCard from './ArticleCard';
import bg1 from "./bg1.jpg";
import bg2 from "./bg2.jpg";
import Card from './Card';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StoryCard from './StoryCard';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TopPost from './TopPost';
var customStyle={
    "position":"absolute",
    "color":"white",
    "bottom":"18%",
    "left":"5%",
     "fontSize":"x-large",
     "fontWeight":"bold"
}
export default function Home(){
    return(
        <>
            <div id='img-sec'>
                <div id='firstImg'>
                <img src={bg1} />
                <span style={customStyle}>Title of vertical gallary</span>
                </div>
            
                <div id='secondImg'>
                    <img src={bg2} />
                    <img src={bg2} />
                </div>
            </div>

            <h3 style={{"fontFamily":"sans-serif","marginLeft":"2%"}}> <span style={{"borderBottom":"solid 2px orange"}}>The</span> Latest</h3>


            <div id='card-sec'>
                <Card src={bg1} heading="Joshua Tree Overnight Adventure" content="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces." />
                <Card src={bg1} heading="Joshua Tree Overnight Adventure" content="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces." />
                <Card src={bg1} heading="Joshua Tree Overnight Adventure" content="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces." />
            </div>

            <div id="article-sec">
            <h3 style={{"fontFamily":"sans-serif","marginLeft":"2%"}}> <span style={{"borderBottom":"solid 2px orange"}}>Late</span>st Articles</h3>
            <div id='article-sec-part'>
            <div id='sec1'>
            <ArticleCard src={bg1} articleHeading="Catch waves with an adventure guide" articleContent="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."/>
             <ArticleCard src={bg1} articleHeading="Catch waves with an adventure guide" articleContent="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."/>
            <ArticleCard src={bg1} articleHeading="Catch waves with an adventure guide" articleContent="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."/>
            <ArticleCard src={bg1} articleHeading="Catch waves with an adventure guide" articleContent="Gujrat is vastly underrated and it's a mystery to us why the region isn't more well known as a tourist destination. It has a plethora of temples and palaces."/>
            <div style={{"display":"flex","marginTop":"4%","cursor":"pointer"}}>
            <div><ArrowDownwardIcon style={{"color":"red","marginTop":"2%"}} /></div>
            <div><span style={{"fontFamily":"sans-serif","color":"lightgray"}}> Load More</span></div>
            </div>
            <div id='sec1-gallary'>  
                <img src={bg1}/>
            </div>
            </div>
            <div id='sec2'>
               <div id='advs' class="home-adv">
              <div> Advertisement</div>
               </div>
            
               <TopPost src={bg2} img={bg1}/>

            </div>
            </div>
            </div>

            {/* latest story section */}
            <div id='latest-story'>
            <h3 style={{"fontFamily":"sans-serif"}}> <span style={{"borderBottom":"solid 2px orange"}}>Late</span>st Stories</h3>
            <hr style={{"marginBottom":"4%"}}/>
            <div id='storycard'>
            <StoryCard footerVal="TECH"/>
            <StoryCard footerVal="STYLE" id="visibleBorder"/>
            <StoryCard footerVal="TECH"/>
            </div>
            <hr />
            <div style={{"display":"flex","cursor":"pointer"}}>
            <div style={{"fontFamily":"sans-serif","color":"lightgray"}}>View More</div>
            <div><ArrowRightAltIcon style={{"color":"red"}} /></div>
            </div>
            </div>
        </>
    )
}