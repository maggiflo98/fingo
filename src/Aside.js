import React from "react";
import IMAGES from "../src/Images";
import "./Aside.css";



const Aside=() =>{
    const imageSize ='2px'

    return(
        <div className="aside">
        <h1>we are trusted by</h1>
        <div className="aside_images">
        <div className="aside-container">
        <img src={IMAGES.hof}/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.pioneer}/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.chui}/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.hustle}/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.Combinator}/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.goodwater}/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.outbound}/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.continet}/>
        </div>
        <div className="aside-container">
        <img src={IMAGES.fintech}/>
         </div>


        
        </div>
        
        </div>
    )


}


export default Aside;
