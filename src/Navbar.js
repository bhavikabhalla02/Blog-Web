import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function Navbar(){
   const[icon,setIcon]=useState("hidden");
   const[iconD,setIconD]=useState("none");
   function showMenu(){
    if(icon=="hidden"){
        setIcon("visible");
        setIconD("block");
    }
    else{
        setIcon("hidden");
        setIconD("none");
    }
   }
   setInterval(() => {
    if(document.getElementsByTagName("body")[0].offsetWidth>=610){
        setIcon("hidden");
        setIconD("none");
    }
   }, 100);
    return(
        <>
            <div id="logo">
                <div id="logo-first">The</div>
                <div id="logo-second">Siren</div>
                <div id="menuIcon"><MenuIcon onClick={showMenu}/></div>
            </div>
            <div id="navItem">
                <ul type="none">
                    <li><NavLink to="/" className="link">Home</NavLink></li>
                    <li><NavLink to="/Bollywood" className="link">Bollywood</NavLink></li>
                    <li><NavLink to="/Technology" className="link">Technology</NavLink></li>
                    <li><NavLink to="/Hollywood" className="link">Hollywood</NavLink></li>
                    <li><NavLink to="/Fitness" className="link">Fitness</NavLink></li>
                    <li><NavLink to="/Food" className="link">Food</NavLink></li>
                </ul>
                <hr />
            </div>
            <div id="menuItem" style={{"visibility":icon,"display":iconD}}>
                <ul type="none" style={{"textAlign":"center","fontSize":"x-large"}}>
                    <li><NavLink to="/" className="link">Home</NavLink></li>
                    <li><NavLink to="/Bollywood" className="link">Bollywood</NavLink></li>
                    <li><NavLink to="/Technology" className="link">Technology</NavLink></li>
                    <li><NavLink to="/Hollywood" className="link">Hollywood</NavLink></li>
                    <li><NavLink to="/Fitness" className="link">Fitness</NavLink></li>
                    <li><NavLink to="/Food" className="link">Food</NavLink></li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}