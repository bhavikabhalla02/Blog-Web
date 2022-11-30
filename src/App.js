import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Technology from "./Technology";
import Fitness from "./Fitness";
import Food from "./Food";
import Hollywood from "./Hollywood";

export default function App(){
    return(
       <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} /> 
                <Route path="/Technology" element={<Technology />} /> 
                <Route path="/Fitness" element={<Fitness />} /> 
                <Route path="/Bollywood" element={<Bollywood />} /> 
                <Route path="/Hollywood" element={<Hollywood />} /> 
                <Route path="/Food" element={<Food />} /> 
                
             </Route>
        </Routes>
       </BrowserRouter>
    )
}